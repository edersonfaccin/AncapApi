import { Field, ObjectType } from '@nestjs/graphql';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Schema as MongooseSchema, Types } from 'mongoose';

export type ProductDocument = Product & Document;

@Schema()
@ObjectType()
export class Product {
    
    @Field(() => String)
    _id: MongooseSchema.Types.ObjectId;

    @Prop({ required: true })
    @Field(() => String, { description: 'Product name' })
    name: string;

    @Prop({ required: false })
    @Field(() => String, { description: 'Product notes' })
    notes: string;

    @Prop({ required: false, default: 0 })
    @Field(() => Number, { description: 'Product value' })
    value: number;

    @Prop({ required: false })
    @Field(() => [String], { description: 'Product images' })
    images: Types.Array<string>

    @Prop({ required: true, default: true })
    @Field(() => Boolean, { description: 'Product active' })
    active: boolean;

    @Prop({ required: true, default: Date.now() })
    @Field(() => Date, { description: 'Product date register' })
    date_register: Date
}

export const ProductSchema = SchemaFactory.createForClass(Product);
