import { createClient, dedupExchange, fetchExchange } from 'urql';
import { cacheExchange } from '@urql/exchange-graphcache';
import { Mutation, Subscription } from './cache';
import schema from '../../introspection/schema.json';

const client = createClient({
  url: 'http://localhost:4000/graphql',
  exchanges: [
    dedupExchange,
    // @ts-expect-error
    cacheExchange({ updates: { Mutation, Subscription }, schema }),
    fetchExchange,
  ],
  fetchOptions: () => {
    return { headers: {} };
  },
});

export { client };
