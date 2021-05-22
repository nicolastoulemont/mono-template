import { objectType, unionType } from 'nexus'
export * from './queries'
export * from './actions'

export const User = objectType({
	name: 'User',
	isTypeOf: (data) => Boolean((data as any).email),
	definition(t) {
		t.id('id')
		t.string('email')
		t.string('access')
		t.boolean('verified')
		t.date('createdAt')
		t.date('updatedAt')
	}
})

export const UserResult = unionType({
	name: 'UserResult',
	description: 'A response resulting in a User or some errors',
	definition(t) {
		t.members(
			'User',
			'UserAuthenticationError',
			'UserForbiddenError',
			'InvalidArgumentsError',
			'NotFoundError',
			'UnableToProcessError'
		)
	}
})

export const Users = objectType({
	name: 'Users',
	description: 'A list of Users',
	isTypeOf: (data) => Boolean((data as any).users),
	definition(t) {
		t.list.field('users', { type: 'User' })
	}
})

export const UsersResult = unionType({
	name: 'UsersResult',
	description: 'A response resulting in possibly more than one User or some errors',
	definition(t) {
		t.members(
			'Users',
			'UserAuthenticationError',
			'UserForbiddenError',
			'InvalidArgumentsError',
			'NotFoundError',
			'UnableToProcessError'
		)
	}
})

export const UserResponse = objectType({
	name: 'UserResponse',
	definition(t) {
		t.field('user', { type: 'User' })
		t.list.field('errors', { type: 'Error' })
	}
})

export const UsersResponse = objectType({
	name: 'UsersResponse',
	definition(t) {
		t.list.field('users', { type: 'User' })
		t.list.field('errors', { type: 'Error' })
	}
})
