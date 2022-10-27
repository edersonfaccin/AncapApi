import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, SchemaTypes, Types } from 'mongoose';

export type CoinDocument = Coin & Document;

@Schema()
export class Coin {
    @Prop({ type: SchemaTypes.ObjectId, ref: 'User' })
    iduser: Types.ObjectId;

    @Prop({ type: SchemaTypes.ObjectId, ref: 'Wallet' })
    idwallet: Types.ObjectId;

    @Prop({ required: false })
    notes: string;

    @Prop({ required: true })
    public_address: string;

    @Prop({ required: true, default: true })
    active: boolean;

    @Prop({ required: true, default: Date.now() })
    date_register: Date
}

export const CoinSchema = SchemaFactory.createForClass(Coin);