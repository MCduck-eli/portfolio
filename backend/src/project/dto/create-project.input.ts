import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class CreateProjectInput {
  @Field()
  client!: string;

  @Field()
  imageBig!: string;

  @Field()
  imageSmall1!: string;

  @Field()
  imageSmall2!: string;

  @Field()
  liveUrl!: string;
}
