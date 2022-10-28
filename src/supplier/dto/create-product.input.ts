import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class CreateProductInput {

    @Field(() => String, { description: 'Product name' })
    name: string;

    @Field(() => String, { description: 'Product notes', nullable: true })
    notes: string;

    @Field(() => Number, { description: 'Product value', nullable: true })
    value: number;

    @Field(() => Boolean, { description: 'Product active', nullable: true })
    active: boolean;

    @Field(() => Date, { description: 'Product date register', nullable: true })
    date_register?: Date;
}