import { InputType, Field } from '@nestjs/graphql';
import { CreateSupplierCoinInput } from './create-coin.input';
import { CreateProductInput } from './create-product.input';
import { CreateServiceInput } from './create-service.input';

@InputType()
export class CreateSupplierInput {
    @Field(() => String, { description: 'Supplier name' })
    name: string;

    @Field(() => String, { description: 'Supplier email' })
    email: string;

    @Field(() => String, { description: 'Supplier password' })
    address: string;

    @Field(() => Number, { description: 'Supplier latitude', nullable: true })
    latitude: number;

    @Field(() => Number, { description: 'Supplier longitude', nullable: true })
    longitude: number;

    @Field(() => [CreateSupplierCoinInput], { description: 'Supplier coins', nullable: true })
    coins: Array<CreateSupplierCoinInput>;

    @Field(() => [CreateServiceInput], { description: 'Supplier services', nullable: true })
    services: Array<CreateServiceInput>;

    @Field(() => [CreateProductInput], { description: 'Supplier products', nullable: true })
    products: Array<CreateProductInput>;

    @Field(() => Date, { description: 'Supplier date register', nullable: true })
    date_register?: Date;
}