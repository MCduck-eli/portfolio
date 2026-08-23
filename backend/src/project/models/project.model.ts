import { Field, ID, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class ProjectType {
  @Field(() => ID)
  id!: string;

  @Field(() => String)
  client!: string;

  @Field(() => String)
  imageBig!: string;

  @Field(() => String)
  imageSmall1!: string;

  @Field(() => String)
  imageSmall2!: string;

  @Field(() => String)
  liveUrl!: string;

  @Field(() => Date)
  createdAt!: Date;
}
