import { InputType, Field } from '@nestjs/graphql';
import { Coin } from '../schemas/coin.schema';
import { CreateCoinInput } from './create-coin.input';

@InputType()
export class CreateUserInput {
    @Field(() => String, { description: 'User name' })
    name: string;

    @Field(() => String, { description: 'User email' })
    email: string;

    @Field(() => String, { description: 'User password' })
    password: string;

    @Field(() => Number, { description: 'User latitude', nullable: true })
    latitude: number;

    @Field(() => Number, { description: 'User longitude', nullable: true })
    longitude: number;

    @Field(() => [CreateCoinInput], { description: 'User coins', nullable: true })
    coins: Array<CreateCoinInput>;

    @Field(() => Date, { description: 'User birth date', nullable: true })
    birth_date: Date;

    @Field(() => Date, { description: 'User date register', nullable: true })
    date_register?: Date;
}