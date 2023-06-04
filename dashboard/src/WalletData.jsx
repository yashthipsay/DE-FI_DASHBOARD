import {ApolloClient, InMemoryCache, ApolloProvider, HttpLink, from,} from "@apollo/client"

import {onError} from "@apollo/client/link/error"

const link = from([
  errorLink, 
  new HttpLink({uri: "http://localhost:8000/graphql"}),
])