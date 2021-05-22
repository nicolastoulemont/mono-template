import { fieldValidationPlugin, fieldAuthorizationPlugin, OperationLoggerPlugin } from './plugins'
import { makeSchema } from 'nexus'
import * as types from './typeDefs'
import path from 'path'

export const schema = makeSchema({
	types,
	outputs: {
		schema: path.join(__dirname, './nexus-schema.graphql'),
		typegen: path.join(__dirname, './nexus-typegen.d.ts')
	},
	plugins: [fieldValidationPlugin, fieldAuthorizationPlugin, OperationLoggerPlugin],
	features: {
		abstractTypeStrategies: {
			isTypeOf: true
		}
	},
	contextType: {
		module: path.join(__dirname, '../', 'config', 'context.ts'),
		export: 'ApiContext'
	}
})
