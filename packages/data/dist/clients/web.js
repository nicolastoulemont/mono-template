import { createClient, ssrExchange, dedupExchange, fetchExchange } from 'urql';
import { cacheExchange } from '@urql/exchange-graphcache';
import { CacheMutationFns, CacheSubscriptionFns } from '../cache';
import schema from '../introspection/schema.json';
var isServerSide = typeof window === 'undefined';
export var webSsrCache = ssrExchange({ isClient: !isServerSide });
export var webClient = createClient({
    url: 'http://localhost:4000/graphql',
    exchanges: [
        dedupExchange,
        cacheExchange({
            updates: { Mutation: CacheMutationFns, Subscription: CacheSubscriptionFns },
            // @ts-expect-error
            schema: schema
        }),
        webSsrCache,
        fetchExchange
    ],
    fetchOptions: function () {
        return { headers: {} };
    }
});
//# sourceMappingURL=web.js.map