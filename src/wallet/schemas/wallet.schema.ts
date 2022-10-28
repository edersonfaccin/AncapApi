import { Field, ObjectType } from '@nestjs/graphql';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Schema as MongooseSchema } from 'mongoose';

export type WalletDocument = Wallet & Document;

@Schema()
@ObjectType()
export class Wallet {
    @Field(() => String)
    _id: MongooseSchema.Types.ObjectId;

    @Prop({ required: true })
    @Field(() => String, { description: 'Wallet name' })
    name: string;

    @Prop({ required: true, default: true })
    @Field(() => String, { description: 'Wallet active' })
    active: boolean;

    @Prop({ required: true, default: Date.now() })
    @Field(() => String, { description: 'Wallet date register' })
    date_register: Date
}

export const WalletSchema = SchemaFactory.createForClass(Wallet);