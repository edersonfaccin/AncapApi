import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class CreateWalletInput {
    @Field(() => String, { description: 'Wallet name' })
    name: string;

    @Field(() => Boolean, { description: 'Wallet active', nullable: true })
    active?: boolean;

    @Field(() => Date, { description: 'Wallet date register', nullable: true })
    date_register?: Date;
}