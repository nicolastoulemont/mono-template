import { queryField, unionType } from 'nexus'
import { authorize, NotFoundError } from '../../utils'
import prisma from '../../lib/prisma'

export const currentAccountResult = unionType({
	name: 'CurrentAccountResult',
	description: 'The result of the currentAccount query',
	definition(t) {
		t.members('Account', 'UserAuthenticationError', 'UserForbiddenError', 'NotFoundError')
	}
})

export const currentAccount = queryField('currentAccount', {
	type: 'CurrentAccountResult',
	authorization: (ctx) => authorize(ctx, 'user'),
	async resolve(_, __, { user }) {
		try {
			const account = await prisma.account.findUnique({ where: { id: user.accountId } })
			return account
		} catch (error) {
			return NotFoundError
		}
	}
})
