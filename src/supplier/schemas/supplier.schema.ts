import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { ICoin, IServiceType } from 'src/utils/Interfaces';

export type SupplierDocument = Supplier & Document;

@Schema()
export class Supplier {
    @Prop({ required: true })
    name: string;

    @Prop({ required: true })
    email: string;

    @Prop({ required: true })
    address: string;

    @Prop({ required: true, default: 0 })
    latitude: number;

    @Prop({ required: true, default: 0 })
    longitude: number;

    @Prop({ })
    coins: ICoin[]

    @Prop({ })
    services: IServiceType[]

    @Prop({ required: true, default: Date.now() })
    date_register: Date
}

export const SupplierSchema = SchemaFactory.createForClass(Supplier);