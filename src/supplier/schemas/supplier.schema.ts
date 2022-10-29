import { Field, ObjectType } from '@nestjs/graphql';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Schema as MongooseSchema, Types } from 'mongoose';
import { SupplierCoin, SupplierCoinSchema } from './coin.schema';
import { Product, ProductSchema } from './product.schema';
import { Service, ServiceSchema } from './service.schema';

export type SupplierDocument = Supplier & Document;

@Schema()
@ObjectType()
export class Supplier {

    @Field(() => String)
    _id: MongooseSchema.Types.ObjectId;

    @Prop({ required: true, default: '' })
    @Field(() => String, { description: 'Supplier name' })
    name: string;

    @Prop({ required: true, default: '' })
    @Field(() => String, { description: 'Supplier email' })
    email: string;

    @Prop({ required: true, default: '' })
    @Field(() => String, { description: 'Supplier address' })
    address: string;

    @Prop({ required: true, default: 0 })
    @Field(() => Number, { description: 'Supplier latitude' })
    latitude: number;

    @Prop({ required: true, default: 0 })
    @Field(() => Number, { description: 'Supplier longitude' })
    longitude: number;

    @Prop({ type: [SupplierCoinSchema] })
    @Field(() => [SupplierCoin], { description: 'Supplier coins' })
    coins: Types.Array<SupplierCoin>

    @Prop({ type: [ServiceSchema] })
    @Field(() => [Service], { description: 'Supplier services' })
    services: Types.Array<Service>

    @Prop({ type: [ProductSchema] })
    @Field(() => [Product], { description: 'Supplier products' })
    products: Types.Array<Product>

    @Prop({ required: true, default: Date.now() })
    @Field(() => Date, { description: 'Supplier date register' })
    date_register: Date
}

export const SupplierSchema = SchemaFactory.createForClass(Supplier);