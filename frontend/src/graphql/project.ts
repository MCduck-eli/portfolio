import { gql } from "@apollo/client";

export const GET_PROJECTS_QUERY = gql`
    query GetProjects {
        getProjects {
            id
            client
            imageBig
            imageSmall1
            imageSmall2
            liveUrl
            createdAt
        }
    }
`;
