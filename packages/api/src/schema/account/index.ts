import { objectType, unionType } from 'nexus'
// export * from './query'
export * from './mutation'

export const Account = objectType({
	name: 'Account',
	isTypeOf: (data) => Boolean((data as any).email),
	definition(t) {
		t.implements('Node')
		t.email('email')
		t.date('createdAt')
		t.date('updatedAt')
		t.date('verifiedAt')
	}
})

export const AccountResult = unionType({
	name: 'AccountResult',
	description: 'Return an account or account related errors',
	definition(t) {
		t.members(
			'Account',
			'UserAuthenticationError',
			'UserForbiddenError',
			'NotFoundError',
			'InvalidArgumentsError',
			'UnableToProcessError'
		)
	}
})
