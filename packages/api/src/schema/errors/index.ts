import { enumType, objectType } from 'nexus'

export const ErrorCode = enumType({
	name: 'ErrorCode',
	description: 'The differents error codes the api will return if needed',
	members: ['UNAUTHORIZED', 'FORBIDDEN', 'BAD_REQUEST', 'UNABLE_TO_PROCESS', 'NOT_FOUND']
})

export const ErrorMessage = enumType({
	name: 'ErrorMessage',
	description: 'The differents error message the api will return if needed',
	members: [
		'UNAUTHENTICATED_PLEASE_LOGIN',
		'FORBIDDEN_YOU_DO_NOT_HAVE_ACCESS_TO_THIS_RESOURCE',
		'UNABLE_TO_PROCESS_REQUEST_DUE_TO_CLIENT_ERROR',
		'UNABLE_TO_PROCESS_REQUEST_DUE_TO_SERVER_ERROR',
		'RESOURCE_NOT_FOUND'
	]
})

export const InvalidArgument = objectType({
	name: 'InvalidArgument',
	definition(t) {
		t.string('key')
		t.string('message')
	}
})

export const InvalidArgumentsErrorType = objectType({
	name: 'InvalidArgumentsError',
	isTypeOf: (data) => (data as any).code === 'BAD_REQUEST',
	definition(t) {
		t.field('code', {
			type: 'ErrorCode',
			resolve: () => 'BAD_REQUEST'
		})
		t.field('message', {
			type: 'ErrorMessage',
			resolve: () => 'UNABLE_TO_PROCESS_REQUEST_DUE_TO_CLIENT_ERROR'
		})
		t.list.field('invalidArguments', { type: 'InvalidArgument' })
	}
})

export const UnableToProcessErrorType = objectType({
	name: 'UnableToProcessError',
	isTypeOf: (data) => (data as any).code === 'UNABLE_TO_PROCESS',
	definition(t) {
		t.field('code', {
			type: 'ErrorCode',
			resolve: () => 'UNABLE_TO_PROCESS'
		})
		t.field('message', {
			type: 'ErrorMessage',
			resolve: () => 'UNABLE_TO_PROCESS_REQUEST_DUE_TO_SERVER_ERROR'
		})
	}
})

export const NotFoundErrorType = objectType({
	name: 'NotFoundError',
	isTypeOf: (data) => (data as any).code === 'NOT_FOUND',
	definition(t) {
		t.field('code', {
			type: 'ErrorCode',
			resolve: () => 'NOT_FOUND'
		})
		t.field('message', {
			type: 'ErrorMessage',
			resolve: () => 'RESOURCE_NOT_FOUND'
		})
	}
})

export const UserAuthenticationError = objectType({
	name: 'UserAuthenticationError',
	isTypeOf: (data) => (data as any).code === 'UNAUTHORIZED',
	definition(t) {
		t.field('code', {
			type: 'ErrorCode',
			resolve: () => 'UNAUTHORIZED'
		})
		t.field('message', {
			type: 'ErrorMessage',
			resolve: () => 'UNAUTHENTICATED_PLEASE_LOGIN'
		})
	}
})

export const UserForbiddenError = objectType({
	name: 'UserForbiddenError',
	isTypeOf: (data) => (data as any).code === 'FORBIDDEN',
	definition(t) {
		t.field('code', {
			type: 'ErrorCode',
			resolve: () => 'FORBIDDEN'
		})
		t.field('message', {
			type: 'ErrorMessage',
			resolve: () => 'FORBIDDEN_YOU_DO_NOT_HAVE_ACCESS_TO_THIS_RESOURCE'
		})
	}
})
