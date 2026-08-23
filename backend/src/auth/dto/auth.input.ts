import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class RegisterInput {
  @Field()
  name!: string;

  @Field()
  email!: string;

  @Field()
  password!: string;
}

@InputType()
export class LoginInput {
  @Field()
  email!: string;

  @Field()
  password!: string;
}

@InputType()
export class SocialAuthInput {
  @Field()
  email!: string;

  @Field()
  name!: string;

  @Field({ nullable: true })
  avatar?: string;

  @Field()
  provider!: string;

  @Field()
  providerId!: string;
}
