import { JwtService } from '@nestjs/jwt';
import { PrismaService } from '../prisma/prisma.service';
import { RegisterInput, LoginInput, SocialAuthInput } from './dto/auth.input';
import { AuthPayload } from './models/auth-payload.model';
export declare class AuthService {
    private readonly prisma;
    private readonly jwtService;
    constructor(prisma: PrismaService, jwtService: JwtService);
    register(input: RegisterInput): Promise<AuthPayload>;
    login(input: LoginInput): Promise<AuthPayload>;
    validateSocialUser(input: SocialAuthInput): Promise<AuthPayload>;
}
