import { Field, ObjectType } from '@nestjs/graphql';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, SchemaTypes, Types, Schema as MongooseSchema } from 'mongoose';

export type CoinDocument = Coin & Document;

@Schema()
@ObjectType()
export class Coin {
    
    @Field(() => String)
    _id: MongooseSchema.Types.ObjectId;

    @Prop({ type: SchemaTypes.ObjectId, ref: 'Wallet' })
    @Field(() => String, { description: 'Coin wallet id' })
    idwallet: Types.ObjectId;

    @Prop({ required: false, default: '' })
    @Field(() => String, { description: 'Coin notes' })
    notes: string;

    @Prop({ required: true, default: '' })
    @Field(() => String, { description: 'Coin public address' })
    public_address: string;

    @Prop({ required: true, default: true })
    @Field(() => Boolean, { description: 'Coin active' })
    active: boolean;

    @Prop({ required: true, default: Date.now() })
    @Field(() => Date, { description: 'Coin date register' })
    date_register: Date
}

export const CoinSchema = SchemaFactory.createForClass(Coin);
