import 'dotenv-safe/config'
import express from 'express'
import rateLimit from 'express-rate-limit'
import { __prod__ } from './constants'
import { origin } from '@config/cors'
import { server } from '@config/server'
import { SESSION_CONFIG } from '@config/session'
import helmet from 'helmet'
import http from 'http'

export async function serve() {
	const app = express()

	if (__prod__) {
		const limiter = rateLimit({
			windowMs: 15 * 60 * 1000,
			max: 500,
			message: 'You have exceeded the 500 requests in 15min limit!',
			headers: true
		})

		app.use(limiter)

		// Protection
		app.use(helmet())
	}
	app.set('trust proxy', 1)
	app.use(SESSION_CONFIG)

	// If use of credentials, must specify an origin
	server.applyMiddleware({
		app,
		cors: {
			credentials: true,
			origin
		}
	})

	/* Additionnal operation needed for the subscription (web sockets) to work with
	apollo-server-express, src : https://www.apollographql.com/docs/apollo-server/data/subscriptions/ */
	const httpServer = http.createServer(app)
	server.installSubscriptionHandlers(httpServer)

	const PORT = process.env.PORT || 4000

	httpServer.listen(PORT, () => {
		console.log(`Server ready at http://localhost:${PORT}${server.graphqlPath}`)
		console.log(`Subscriptions ready at ws://localhost:${PORT}${server.subscriptionsPath}`)
	})
}
