import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class ListWalletInput {
    @Field(() => Number, { description: 'Limit pagination' })
    limit: number;

    @Field(() => Number, { description: 'Offset pagination' })
    offset: number;
}