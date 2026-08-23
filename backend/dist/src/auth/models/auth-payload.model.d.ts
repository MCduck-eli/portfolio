export declare class UserType {
    id: string;
    email: string;
    name: string;
    avatar?: string | null;
    provider: string;
}
export declare class AuthPayload {
    accessToken: string;
    user: UserType;
}
