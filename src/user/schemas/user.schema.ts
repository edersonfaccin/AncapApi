import { Field, ObjectType } from '@nestjs/graphql';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types, Schema as MongooseSchema } from 'mongoose';
import { Coin, CoinSchema } from './coin.schema';

export type UserDocument = User & Document;

@Schema()
@ObjectType()
export class User {

    @Field(() => String)
    _id: MongooseSchema.Types.ObjectId;

    @Prop({ required: true })
    @Field(() => String, { description: 'User name' })
    name: string;

    @Prop({ required: true })
    @Field(() => String, { description: 'User email' })
    email: string;

    @Prop({ required: true })
    @Field(() => String, { description: 'User password' })
    password: string;

    @Prop({ required: true, default: 0 })
    @Field(() => Number, { description: 'User latitude' })
    latitude: number;

    @Prop({ required: true, default: 0 })
    @Field(() => Number, { description: 'User longitude' })
    longitude: number;

    @Prop({ type: [CoinSchema] })
    @Field(() => [Coin], { description: 'User coins' })
    coins: Types.Array<Coin>

    @Prop({ required: true, default: new Date(1900, 0, 1) })
    @Field(() => Date, { description: 'User birth date' })
    birth_date: Date

    @Prop({ required: true, default: Date.now() })
    @Field(() => Date, { description: 'User date register' })
    date_register: Date
}

export const UserSchema = SchemaFactory.createForClass(User);