import { ApolloError } from 'apollo-server-express'
export * from './constants'

export function logAndThrowErr(err: any) {
	console.log(JSON.stringify(err, null, 2))
	throw new ApolloError('Internal server error', '500', {
		server: 'Internal server error',
	})
}

export function notFound() {
	return {
		errors: [{ key: 'NotFound', message: 'Item not found' }],
	}
}

export function internalServerError() {
	return {
		errors: [
			{
				key: 'ServerError',
				message: 'The server could not successfully process this request',
			},
		],
	}
}
