import { createClient, dedupExchange, fetchExchange } from 'urql';
import { cacheExchange } from '@urql/exchange-graphcache';
import { CacheMutationFns, CacheSubscriptionFns } from '../cache';
// @ts-ignore
import schema from '../introspection/schema.json';
export var mobileClient = createClient({
    url: 'http://localhost:4000/graphql',
    exchanges: [
        dedupExchange,
        cacheExchange({
            updates: {
                Mutation: CacheMutationFns,
                Subscription: CacheSubscriptionFns
            },
            // @ts-expect-error
            schema: schema
        }),
        fetchExchange
    ],
    fetchOptions: function () {
        return { headers: {} };
    }
});
//# sourceMappingURL=mobile.js.map