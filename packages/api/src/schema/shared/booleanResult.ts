import { objectType, unionType } from 'nexus'

export const BooleanResponse = objectType({
	name: 'BooleanResponse',
	definition(t) {
		t.field('success', { type: 'Boolean' })
		t.list.field('errors', { type: 'Error' })
	}
})

export const Success = objectType({
	name: 'Success',
	isTypeOf: (data) => Boolean((data as any).success),
	definition(t) {
		t.field('success', { type: 'Boolean' })
	}
})

export const BooleanResult = unionType({
	name: 'BooleanResult',
	description: 'Either a success result or errors',
	definition(t) {
		t.members(
			'Success',
			'UserAuthenticationError',
			'UserForbiddenError',
			'InvalidArgumentsError',
			'NotFoundError',
			'UnableToProcessError'
		)
	}
})
