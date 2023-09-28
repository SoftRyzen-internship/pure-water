import { gql } from 'graphql-request';

export const getProjects = gql`
  query ($locale: SiteLocale) {
    project(locale: $locale) {
      projectList {
        id
        title
        description
        location
        imageList {
          id
          image
          alt
        }
      }
    }
  }
`;
