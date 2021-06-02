import { NexusGenFieldTypes } from '../../schema/nexus-typegen'
import { PartialInvalidArgumentsError } from '../errors'
import { RecursiveKeyOf, ValidatorsLookUp } from './types'
import { ValidatorsRegistry } from './validators'

type ValidatorRegistryKey = keyof typeof ValidatorsRegistry

export function checkArgs<T extends Record<string, unknown>>(
	args: T,
	keys: Array<
		| `${string & RecursiveKeyOf<typeof args>}:${ValidatorRegistryKey}`
		| `${string & RecursiveKeyOf<typeof args>}`
	>
): NexusGenFieldTypes['InvalidArgumentsError'] | undefined {
	const lookup = keys.reduce((acc: ValidatorsLookUp, key) => {
		const [targetKey, targetFn = 'req'] = key.split(':') as [
			`${string & RecursiveKeyOf<typeof args>}`,
			ValidatorRegistryKey
		]
		acc[targetKey] = ValidatorsRegistry[targetFn]
		return acc
	}, {})

	let invalidArguments: Array<{ key: string; message: string }> = []

	// Apply the chosen validation method
	function validate(key: string, value: any) {
		if (typeof value === 'string' || 'number') {
			if (lookup[key]) {
				const message = lookup[key](key, value)
				if (message) {
					invalidArguments.push({ key: key, message })
				}
			}
		}
	}

	// Recursively parse the args until the fields can be checked if needed
	function parseObj(args: any) {
		for (const key in args) {
			if (Array.isArray(args[key])) {
				if (args[key].length > 0) {
					args[key].forEach(
						(item: any) => typeof item !== 'boolean' && validate(key, item)
					)
				} else {
					validate(key, args[key])
				}
			} else if (typeof args[key] === 'object') {
				parseObj(args[key])
			} else {
				validate(key, args[key])
			}
		}
	}

	parseObj(args)
	if (invalidArguments.length > 0) {
		return {
			...PartialInvalidArgumentsError,
			invalidArguments
		}
	} else {
		return undefined
	}
}
