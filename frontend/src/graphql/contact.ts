import { gql } from "@apollo/client";

export const SEND_MESSAGE_MUTATION = gql`
    mutation SendMessage($input: CreateContactInput!) {
        sendMessage(input: $input) {
            success
            message
        }
    }
`;
