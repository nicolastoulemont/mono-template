import { objectType, unionType } from 'nexus'
// export * from './query'
export * from './mutation'
import prisma from '../../lib/prisma'

export const Account = objectType({
	name: 'Account',
	isTypeOf: (data) => Boolean((data as any).email),
	definition(t) {
		t.implements('Node')
		t.string('email')
		t.date('createdAt')
		t.date('updatedAt')
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
