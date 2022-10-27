import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class CreateUserInput {
  @Field()
  name: string;

  @Field()
  email: string;

  @Field()
  password: string;

  @Field()
  latitude: number;

  @Field()
  longitude: number;

  @Field()
  coins: Object[]

  @Field()
  birth_date: Date

  @Field()
  date_register: Date
}