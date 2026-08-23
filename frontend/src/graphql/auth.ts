import { gql } from "@apollo/client";

export const REGISTER_MUTATION = gql`
    mutation Register($input: RegisterInput!) {
        register(input: $input) {
            accessToken
            user {
                id
                name
                email
            }
        }
    }
`;

export const LOGIN_MUTATION = gql`
    mutation Login($input: LoginInput!) {
        login(input: $input) {
            accessToken
            user {
                id
                name
                email
            }
        }
    }
`;

export const SOCIAL_LOGIN_MUTATION = gql`
    mutation SocialLogin($input: SocialAuthInput!) {
        socialLogin(input: $input) {
            accessToken
            user {
                id
                name
                email
                avatar
            }
        }
    }
`;
