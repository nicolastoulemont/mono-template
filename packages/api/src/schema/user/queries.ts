import { queryField, idArg, nonNull } from 'nexus'
import { authorize } from '@utils/authorization'
import { NotFoundError } from '@utils/errors'

export const currentUser = queryField('currentUser', {
	type: 'UserResult',
	authorization: (ctx) => authorize(ctx, 'user'),
	async resolve(_, __, ctx) {
		try {
			// const user = await UserModel.findById(ctx.user.id)
			return {}
		} catch (err) {
			return NotFoundError
		}
	}
})

export const userById = queryField('userById', {
	type: 'UserResponse',
	args: {
		id: nonNull(idArg())
	},
	authorization: (ctx) => authorize(ctx, 'admin'),
	async resolve(_, args, ctx) {
		try {
			// const user = await UserModel.findById(args.id)
			return {}
		} catch (err) {
			return NotFoundError
		}
	}
})

export const users = queryField('users', {
	type: 'UsersResponse',
	authorization: (ctx) => authorize(ctx, 'admin'),
	async resolve() {
		try {
			// const users = await UserModel.find({}).sort({ updatedAt: 'descending' }).lean()
			// .skip(args.params?.offset || 0)
			// .limit(args.params?.limit || 0)
			return {}
		} catch (err) {
			return NotFoundError
		}
	}
})
