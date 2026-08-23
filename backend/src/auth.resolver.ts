import { Resolver, Mutation, Args } from '@nestjs/graphql';
import { AuthService } from './auth/auth.service';
import { AuthPayload } from './auth/models/auth-payload.model';
import {
  RegisterInput,
  LoginInput,
  SocialAuthInput,
} from './auth/dto/auth.input';

@Resolver()
export class AuthResolver {
  constructor(private readonly authService: AuthService) {}

  @Mutation(() => AuthPayload)
  async register(@Args('input') input: RegisterInput): Promise<AuthPayload> {
    return this.authService.register(input);
  }

  @Mutation(() => AuthPayload)
  async login(@Args('input') input: LoginInput): Promise<AuthPayload> {
    return this.authService.login(input);
  }

  @Mutation(() => AuthPayload)
  async socialLogin(
    @Args('input') input: SocialAuthInput,
  ): Promise<AuthPayload> {
    return this.authService.validateSocialUser(input);
  }
}
