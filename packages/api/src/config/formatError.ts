import { GraphQLError } from 'graphql'

export function formatError(error: GraphQLError) {
	if (error.name === 'ValidationError') {
		let err = error.extensions
		const code = error.extensions?.code
		delete err?.exception
		delete err?.code
		return {
			...error,
			code,
			fields: err,
		}
	} else {
		let err = error.extensions?.exception
		if (err.stacktrace) delete err.stacktrace
		return {
			...error,
			code: error.extensions?.code,
			fields: err,
		}
	}
}
