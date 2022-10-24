import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { ICoin } from 'src/utils/Interfaces';

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

    @Prop({ })
    coins: ICoin[]

    @Prop({ required: true, default: Date.now() })
    date_register: Date
}

export const UserSchema = SchemaFactory.createForClass(User);