import prisma from '@lib/prisma'
import { mutationField, nonNull, stringArg } from 'nexus'
import { checkArgs } from '@utils/validation'

export const createPost = mutationField('createPost', {
	type: 'PostResult',
	args: {
		title: nonNull(stringArg()),
		content: stringArg(),
		authorEmail: nonNull(stringArg())
	},
	validation: (args) => checkArgs(args, ['title', 'authorEmail:mail']),
	async resolve(_, { title, content, authorEmail }) {
		return await prisma.post.create({
			data: {
				title,
				content,
				published: false,
				author: {
					connect: { email: authorEmail }
				}
			}
		})
	}
})
