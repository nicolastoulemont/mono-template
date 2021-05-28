import { createClient, ssrExchange, dedupExchange, fetchExchange } from 'urql'
import { cacheExchange } from '@urql/exchange-graphcache'
import { CacheMutationFns, CacheSubscriptionFns } from '../cache'
import schema from '../introspection/schema.json'

const isServerSide = typeof window === 'undefined'
export const webSsrCache = ssrExchange({ isClient: !isServerSide })
export const webClient = createClient({
	url: 'http://localhost:4000/graphql',
	exchanges: [
		dedupExchange,
		cacheExchange({
			updates: { Mutation: CacheMutationFns, Subscription: CacheSubscriptionFns },
			// @ts-expect-error
			schema
		}),
		webSsrCache,
		fetchExchange
	],
	fetchOptions: () => {
		return { headers: {} }
	}
})
