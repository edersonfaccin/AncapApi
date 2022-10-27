import { Field, ID, ObjectType } from '@nestjs/graphql';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { ICoin } from 'src/utils/Interfaces';

export type UserDocument = User & Document;

@ObjectType()
@Schema()
export class User {
    @Field(() => ID,{ nullable: true })
    _id: string;

    @Prop({ required: true })
    @Field(() => String,{ nullable: false })
    name: string;

    @Prop({ required: true })
    @Field(() => String,{ nullable: false })
    email: string;

    @Prop({ required: true })
    @Field(() => String,{ nullable: false })
    password: string;

    @Prop({ required: true, default: 0 })
    @Field(() => String,{ nullable: false })
    latitude: number;

    @Prop({ required: true, default: 0 })
    @Field(() => String,{ nullable: false })
    longitude: number;

    @Prop({ })
    @Field(() => ICoin[],{ nullable: true })
    coins: ICoin[]

    @Prop({ required: true, default: new Date(1900, 0, 1) })
    @Field(() => Date, { nullable: false })
    birth_date: Date

    @Prop({ required: true, default: Date.now() })
    @Field(() => Date, { nullable: false })
    date_register: Date
}

export const UserSchema = SchemaFactory.createForClass(User);