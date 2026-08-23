import { AuthService } from './auth/auth.service';
import { AuthPayload } from './auth/models/auth-payload.model';
import { RegisterInput, LoginInput, SocialAuthInput } from './auth/dto/auth.input';
export declare class AuthResolver {
    private readonly authService;
    constructor(authService: AuthService);
    register(input: RegisterInput): Promise<AuthPayload>;
    login(input: LoginInput): Promise<AuthPayload>;
    socialLogin(input: SocialAuthInput): Promise<AuthPayload>;
}
