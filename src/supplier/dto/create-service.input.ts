import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class CreateServiceInput {

    @Field(() => String, { description: 'Service name' })
    name: string;

    @Field(() => String, { description: 'Service notes', nullable: true })
    notes: string;

    @Field(() => Number, { description: 'Service value', nullable: true })
    value: number;

    @Field(() => Boolean, { description: 'Service active', nullable: true })
    active: boolean;

    @Field(() => Date, { description: 'Service date register', nullable: true })
    date_register?: Date;
}