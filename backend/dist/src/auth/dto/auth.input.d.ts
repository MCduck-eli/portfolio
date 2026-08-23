export declare class RegisterInput {
    name: string;
    email: string;
    password: string;
}
export declare class LoginInput {
    email: string;
    password: string;
}
export declare class SocialAuthInput {
    email: string;
    name: string;
    avatar?: string;
    provider: string;
    providerId: string;
}
