import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class UserType {
  @Field(() => String)
  id!: string;

  @Field(() => String)
  email!: string;

  @Field(() => String)
  name!: string;

  @Field(() => String, { nullable: true })
  avatar?: string | null;

  @Field(() => String)
  provider!: string;
}

@ObjectType()
export class AuthPayload {
  @Field(() => String)
  accessToken!: string;

  @Field(() => UserType)
  user!: UserType;
}
