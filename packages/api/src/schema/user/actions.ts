import bcrypt from 'bcrypt'
import cookie from 'cookie'
import jwt from 'jsonwebtoken'
import { inputObjectType, mutationField, arg, stringArg, nonNull } from 'nexus'
import { checkArgs } from '@utils/validation'
import { authorize } from '@utils/authorization'
import { NotFoundError, PartialInvalidArgumentsError } from '@utils/errors'
import { sendForgotPwdEmail, sendVerificationEmail } from '@emails/userEmails'
import { isAfter } from 'date-fns'
import { COOKIE_NAME, __prod__ } from 'src/constants'

// Mutation and InputTypes
export const Sign = inputObjectType({
	name: 'Sign',
	definition(t) {
		t.nonNull.string('email')
		t.nonNull.string('password')
	}
})

export const signUp = mutationField('signUp', {
	type: 'UserResponse',
	args: {
		user: nonNull(
			arg({
				type: Sign
			})
		),
		firstName: nonNull(stringArg()),
		lang: nonNull(stringArg()),
		originUrl: stringArg()
	},
	validation: (args) => checkArgs(args, ['email:mail', 'firstName', 'password:pwd']),
	async resolve(_, args) {
		try {
			const hashedPwd = await bcrypt.hash(args.user.password, 12)
			// await sendVerificationEmail(user, args.lang as 'fr' | 'en', args.originUrl)
			return {}
		} catch (err) {
			return NotFoundError
		}
	}
})
export const signIn = mutationField('signIn', {
	type: 'UserResult',
	args: {
		user: nonNull(
			arg({
				type: Sign
			})
		),
		lang: stringArg()
	},
	validation: (args) => checkArgs(args, ['email:mail', 'password:pwd']),
	async resolve(_, args, ctx) {
		// const { user, errors } = await validateLoginInput2(args)
		// if (errors.length > 0) {
		// 	return {
		// 		...PartialInvalidArgumentsError,
		// 		invalidArguments: errors
		// 	}
		// }

		try {
			// @ts-ignore
			ctx.req.session.user = { id: user._id, access: user.access, profileId: profile._id }

			return {}
		} catch (err) {
			return NotFoundError
		}
	}
})

export const signOut = mutationField('signOut', {
	type: 'BooleanResult',
	authorization: (ctx) => authorize(ctx, 'user'),
	async resolve(_, __, ctx) {
		return new Promise((resolve) =>
			ctx.req.session.destroy((err) => {
				ctx.res.setHeader('Set-Cookie', [
					cookie.serialize('token-presence', JSON.stringify({ logged: true }), {
						httpOnly: false,
						maxAge: -1,
						path: '/',
						sameSite: 'lax',
						secure: false
					})
				])
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

export const modifyEmail = mutationField('modifyEmail', {
	type: 'UserResponse',
	args: {
		email: nonNull(stringArg())
	},
	authorization: (ctx) => authorize(ctx, 'user'),
	validation: (args) => checkArgs(args, ['email:mail']),
	// @ts-ignore
	async resolve(_, args, ctx) {
		try {
			// const existingUser = await UserModel.findOne({ email: args.email })
			// if (existingUser) return { errors: [{ key: 'user', message: 'Email already taken' }] }
			// const user = UserModel.findByIdAndUpdate(
			// 	ctx.user.id,
			// 	{ email: args.email },
			// 	{ new: true }
			// )
			// if (!user) return NotFoundError
			return {}
		} catch (error) {
			return NotFoundError
		}
	}
})
export const modifyPassword = mutationField('modifyPassword', {
	type: 'UserResponse',
	args: {
		password: nonNull(stringArg()),
		newPassword: nonNull(stringArg())
	},
	authorization: (ctx) => authorize(ctx, 'user'),
	validation: (args) => checkArgs(args, ['password:pwd', 'newPassword:pwd']),
	// @ts-ignore
	async resolve(_, args, ctx) {
		try {
			// const user = await UserModel.findById(ctx.user.id)
			// if (!user) return NotFoundError
			// const validPwd = await bcrypt.compare(args.password, user.password)
			// if (!validPwd) return { errors: [{ key: 'password', message: 'Incorrect Password' }] }
			// const hashedPwd = await bcrypt.hash(args.newPassword, 12)
			// const usr = await UserModel.findByIdAndUpdate(
			// 	ctx.user.id,
			// 	{ password: hashedPwd },
			// 	{ new: true }
			// )

			return {}
		} catch (error) {
			console.log(error)
			return NotFoundError
		}
	}
})

export const deleteUser = mutationField('deleteUser', {
	type: 'BooleanResponse',
	args: {
		confirmPassword: nonNull(stringArg())
	},
	authorization: (ctx) => authorize(ctx, 'user'),
	async resolve(_, args, ctx) {
		try {
			// const user = await UserModel.findById(ctx.user.id)
			// if (!user) return { success: false }
			// const validPwd = await bcrypt.compare(args.confirmPassword, user.password)
			// if (!validPwd) {
			// 	return { errors: [{ key: 'confirmPassword', message: 'Wrong password' }] }
			// }

			// await UserModel.findByIdAndDelete(ctx.user.id)

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
		} catch (err) {
			return { success: false }
		}
	}
})

export const lostPassword = mutationField('lostPassword', {
	type: 'BooleanResponse',
	args: {
		email: nonNull(stringArg()),
		lang: nonNull(stringArg())
	},
	validation: (args) => checkArgs(args, ['email:mail']),
	async resolve(_, args) {
		try {
			// const user = await UserModel.findOne({ email: args.email })
			// if (!user) return { success: false }
			// await sendForgotPwdEmail(user, user.email, args.lang as 'fr' | 'en')
			return { success: true }
		} catch (error) {
			return { success: false }
		}
	}
})

export const resetPassword = mutationField('resetPassword', {
	type: 'BooleanResponse',
	args: {
		newPassword: nonNull(stringArg()),
		token: nonNull(stringArg())
	},
	validation: (args) => checkArgs(args, ['newPassword:pwd', 'token']),
	async resolve(_, args) {
		try {
			// const token: any = jwt.verify(args.token, process.env.TOKEN_SECRET as string)
			// if (!token) return { errors: [{ key: 'token', message: 'Invalid token' }] }
			// if (!token.exp) return { errors: [{ key: 'token', message: 'Invalid token' }] }
			// if (isAfter(new Date(token.exp), new Date()))
			// 	return { errors: [{ key: 'token', message: 'Invalid token' }] }
			// if (!token.id) return { errors: [{ key: 'token', message: 'Invalid token' }] }

			// const hashedPwd = await bcrypt.hash(args.newPassword, 12)
			// await UserModel.findByIdAndUpdate(token.id, { password: hashedPwd })
			return { success: true }
		} catch (error) {
			return { success: false }
		}
	}
})

export const reSendVerificationEmail = mutationField('reSendVerificationEmail', {
	type: 'BooleanResponse',
	args: {
		email: nonNull(stringArg()),
		lang: stringArg()
	},
	validation: (args) => checkArgs(args, ['email:mail']),
	async resolve(_, args) {
		try {
			// const user = await UserModel.findOne({ email: args.email })
			// if (!user) return { success: false }
			// if (!user.lastVerificationEmailDate) {
			// 	await sendVerificationEmail(user, args.lang as 'fr' | 'en')
			// 	await UserModel.findByIdAndUpdate(user._id, {
			// 		lastVerificationEmailDate: Date.now()
			// 	})
			// } else {
			// 	if (
			// 		differenceInMinutes(new Date(), new Date(user.lastVerificationEmailDate)) < 30
			// 	) {
			// 		return { success: false }
			// 	} else {
			// 		await sendVerificationEmail(user, args.lang as 'fr' | 'en')
			// 		await UserModel.findByIdAndUpdate(user._id, {
			// 			lastVerificationEmailDate: Date.now()
			// 		})
			// 	}
			// }

			return { success: true }
		} catch (error) {
			return { success: false }
		}
	}
})

export const verifyUser = mutationField('verifyUser', {
	type: 'BooleanResponse',
	args: {
		token: nonNull(stringArg())
	},
	validation: (args) => checkArgs(args, ['token']),
	async resolve(_, args) {
		try {
			const decodedToken = jwt.verify(args.token, process.env.TOKEN_SECRET as string)
			if (decodedToken) {
				// @ts-expect-error
				if (!isAfter(new Date(), new Date(decodedToken.exp))) {
					return {
						errors: [{ key: 'token', message: 'Expired Token' }]
					}
					// @ts-expect-error
				} else if (decodedToken.id) {
					try {
						// @ts-expect-error
						await UserModel.findByIdAndUpdate(decodedToken.id, {
							verified: true
						})
						return { success: true }
					} catch (error) {
						return {
							errors: [{ key: 'token', message: 'Invalid Token' }]
						}
					}
				} else {
					return {
						errors: [{ key: 'token', message: 'Invalid Token' }]
					}
				}
			} else {
				return {
					errors: [{ key: 'token', message: 'Invalid Token' }]
				}
			}
		} catch (error) {
			return { errors: [{ key: 'token', message: 'Invalid Token' }] }
		}
	}
})
