import { objectType } from 'nexus'
export * from './query'
// export * from './mutation'

export const user = objectType({
	isTypeOf: (data) => Boolean((data as any).username),
	name: 'User',
	definition(t) {
		t.implements('Actor')
		t.string('username')
	}
})
