import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';
import { Coin, CoinSchema } from './coin.schema';

export type UserDocument = User & Document;

@Schema()
export class User {

    @Prop({ required: true })
    name: string;

    @Prop({ required: true })
    email: string;

    @Prop({ required: true })
    password: string;

    @Prop({ required: true, default: 0 })
    latitude: number;

    @Prop({ required: true, default: 0 })
    longitude: number;

    @Prop({ type: [CoinSchema] })
    coins: Types.Array<Coin>

    @Prop({ required: true, default: new Date(1900, 0, 1) })
    birth_date: Date

    @Prop({ required: true, default: Date.now() })
    date_register: Date
}

export const UserSchema = SchemaFactory.createForClass(User);