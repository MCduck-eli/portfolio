import { AuthService } from './auth.service';
import { AuthPayload } from './models/auth-payload.model';
import { RegisterInput, LoginInput, SocialAuthInput } from './dto/auth.input';
export declare class AuthResolver {
    private readonly authService;
    constructor(authService: AuthService);
    register(input: RegisterInput): Promise<AuthPayload>;
    login(input: LoginInput): Promise<AuthPayload>;
    socialLogin(input: SocialAuthInput): Promise<AuthPayload>;
}
