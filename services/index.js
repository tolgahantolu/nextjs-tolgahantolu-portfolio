import { gql, request } from "graphql-request";

const graphqlAPIEndpoint = process.env.NEXT_PUBLIC_ENDPOINT_URL;

export const getExperiencesData = async () => {
  const query = gql`
    query {
      experiences(orderBy: createdAt_DESC) {
        title
        year
        company
      }
    }
  `;

  const result = await request(graphqlAPIEndpoint, query);
  return result.experiences;
};

export const getProjectsData = async () => {
  const query = gql`
    query {
      projects(orderBy: createdAt_DESC) {
        title
        description
        slug
        featuredImage {
          url
        }
      }
    }
  `;

  const result = await request(graphqlAPIEndpoint, query);
  return result.projects;
};
