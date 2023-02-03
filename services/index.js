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

export const getPostsData = async () => {
  const query = gql`
    query {
      posts(orderBy: createdAt_DESC) {
        title
        slug
        excerpt
        createdAt
        author {
          name
          photo {
            url
          }
        }
        featuredImage {
          url
        }
      }
    }
  `;

  const result = await request(graphqlAPIEndpoint, query);
  return result.posts;
};

export const getPostDetailData = async (slug) => {
  const query = gql`
    query getDetails($slug: String!) {
      post(where: { slug: $slug }) {
        title
        createdAt
        content {
          raw
          text
        }
        featuredImage {
          url
        }
        author {
          name
          photo {
            url
          }
        }
      }
    }
  `;

  const result = await request(graphqlAPIEndpoint, query, { slug });
  return result.post;
};
