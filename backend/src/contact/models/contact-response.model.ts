import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class ContactResponse {
  @Field()
  success!: boolean;

  @Field()
  message!: string;
}
