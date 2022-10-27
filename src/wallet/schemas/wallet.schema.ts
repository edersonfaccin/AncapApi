import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type WalletDocument = Wallet & Document;

@Schema()
export class Wallet {
    @Prop({ required: true })
    name: string;

    @Prop({ required: true, default: true })
    active: boolean;

    @Prop({ required: true, default: Date.now() })
    date_register: Date
}

export const WalletSchema = SchemaFactory.createForClass(Wallet);