import { GraphQLClient } from 'graphql-request';

const endpoint = 'https://graphql.datocms.com/';

const requestHeaders = {
  'Content-Type': 'application/json',
  authorization: `Bearer ${process.env.NEXT_DATOCMS_API_TOKEN}`,
};

export function datoCmsRequest(query, variables) {
  const client = new GraphQLClient(endpoint, { headers: requestHeaders });

  return client.request(query, variables);
}
