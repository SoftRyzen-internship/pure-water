import { gql } from 'graphql-request';

export const getCurrentFundraising = gql`
  query ($locale: SiteLocale) {
    fundraising(locale: $locale) {
      id
      description
      title
    }
  }
`;
