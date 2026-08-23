import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class CreateContactInput {
  @Field()
  name!: string;

  @Field()
  email!: string;

  @Field()
  content!: string;
}
