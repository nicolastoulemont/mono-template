import bcrypt from 'bcrypt'
import cookie from 'cookie'
import prisma from '../../lib/prisma'
import { sendVerificationEmail } from '../../emails/userEmails'
import { COOKIE_NAME } from '../../constants'
import { inputObjectType, mutationField, nonNull, arg } from 'nexus'
import {
	authorize,
	checkArgs,
	NotFoundError,
	PartialInvalidArgumentsError,
	UnableToProcessError
} from '../../utils'

export const EmailAndPasswordInput = inputObjectType({
	name: 'EmailAndPasswordInput',
	definition(t) {
		t.nonNull.string('email')
		t.nonNull.string('password')
	}
})

export const createAccount = mutationField('createAccount', {
	type: 'AccountResult',
	args: {
		account: nonNull(arg({ type: EmailAndPasswordInput }))
	},
	validation: (args) => checkArgs(args, ['email:mail', 'password:pwd']),
	async resolve(_, { account: { password, email } }) {
		const existingAccount = await prisma.account.findUnique({
			where: { email }
		})

		if (existingAccount) {
			return {
				...PartialInvalidArgumentsError,
				invalidArguments: [{ key: 'email', message: 'Email taken' }]
			}
		}

		const hash = await bcrypt.hash(password, 12)
		const account = await prisma.account.create({
			data: {
				password: hash,
				email
			}
		})
		if (!account) return UnableToProcessError

		await prisma.actor.create({
			data: {
				accountId: account.id
			}
		})

		await sendVerificationEmail(account, 'fr')
		return account
	}
})

export const signIn = mutationField('signIn', {
	type: 'AccountResult',
	args: {
		account: nonNull(arg({ type: EmailAndPasswordInput }))
	},
	validation: (args) => checkArgs(args, ['email:mail', 'password:pwd']),
	async resolve(_, { account: { email, password } }, ctx) {
		const account = await prisma.account.findUnique({
			where: { email },
			include: {
				actor: true
			}
		})

		if (!account) return NotFoundError

		if (!account?.actor?.id) return UnableToProcessError

		const validPassword = await bcrypt.compare(password, account.password)
		if (!validPassword)
			return {
				...PartialInvalidArgumentsError,
				invalidArguments: [{ key: 'password', message: 'Invalid password' }]
			}

		ctx.req.session.user = { id: account.actor.id, access: 'user' }

		return account
	}
})

export const signOut = mutationField('signOut', {
	type: 'BooleanResult',
	authorization: (ctx) => authorize(ctx, 'user'),
	async resolve(_, __, ctx) {
		return new Promise((resolve) =>
			ctx.req.session.destroy((err) => {
				ctx.res.clearCookie(COOKIE_NAME)
				if (err) {
					console.log(err)
					resolve({ success: false })
					return
				}

				resolve({ success: true })
			})
		)
	}
})
