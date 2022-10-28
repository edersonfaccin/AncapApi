import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class CreateSupplierCoinInput {

    @Field(() => String, { description: 'Coin idwallet' })
    idwallet: string;

    @Field(() => String, { description: 'Coin notes', nullable: true })
    notes: string;

    @Field(() => String, { description: 'Coin public_address' })
    public_address: string;

    @Field(() => Boolean, { description: 'Coin active', nullable: true })
    active: boolean;

    @Field(() => Date, { description: 'Coin date register', nullable: true })
    date_register?: Date;
}