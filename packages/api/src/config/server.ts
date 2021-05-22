import { context } from '@config/context'
import { formatError } from '@config/formatError'
import { ApolloServer } from 'apollo-server-express'
import { schema } from '../schema'
import depthLimit from 'graphql-depth-limit'
import { SESSION_CONFIG } from '@config/session'

export const server = new ApolloServer({
	schema,
	formatError,
	context,
	subscriptions: {
		// Promisify the onConnect fn to allow express-session to parse and validate the session
		onConnect: (_, ws: any) =>
			new Promise((resolve) =>
				SESSION_CONFIG(ws.upgradeReq, {} as any, () => resolve(ws.upgradeReq)),
			),
	},
	validationRules: [depthLimit(5)],
	playground: true,
	introspection: true,
})
