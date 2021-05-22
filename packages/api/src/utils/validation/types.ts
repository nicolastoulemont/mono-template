export type ValidationFn = (key: string, value: string | number) => string | null

export interface ValidatorsLookUp {
	[key: string]: ValidationFn
}

export type RecursiveKeyOf<TObj extends object> = {
	[TKey in keyof TObj & (string | number)]: TObj[TKey] extends object
		? `${TKey}` | `${RecursiveKeyOf<TObj[TKey]>}`
		: `${TKey}`
}[keyof TObj & (string | number)]
