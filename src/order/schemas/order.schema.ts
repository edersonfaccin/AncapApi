import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, SchemaTypes, Types } from 'mongoose';
import { EOrderStatus } from 'src/utils/Enums';
import { IServiceType } from 'src/utils/Interfaces';

export type OrderDocument = Order & Document;

@Schema()
export class Order {
    @Prop({ required: true })
    short_description: string;

    @Prop({ required: true })
    details: string;

    @Prop({ required: true })
    address: string;

    @Prop({ required: true, default: 0 })
    latitude: number;

    @Prop({ required: true, default: 0 })
    longitude: number;

    @Prop({ })
    services: IServiceType[]

    @Prop({ type: [SchemaTypes.ObjectId], ref: 'Supplier' })
    supply_candidates: Types.ObjectId[];

    @Prop({ type: SchemaTypes.ObjectId, ref: 'Supplier' })
    supply_winner: Types.ObjectId;

    @Prop({ required: true, default: EOrderStatus.Opened })
    status: EOrderStatus;

    @Prop({ required: true, default: 0 })
    value_ordered: number

    @Prop({ required: true, default: Date.now() })
    date_register: Date

    @Prop({ required: true, default: new Date(1900, 0, 1) })
    date_order_canceled: Date

    @Prop({ required: false })
    reason_order_cancellation: string;

    @Prop({ required: true, default: new Date(1900, 0, 1) })
    date_finished: Date

    @Prop({ required: true, default: new Date(1900, 0, 1) })
    date_service_canceled: Date

    @Prop({ required: false })
    reason_service_cancellation: string;

    @Prop({ required: true, default: new Date(1900, 0, 1) })
    date_funds_returned: Date
}

export const OrderSchema = SchemaFactory.createForClass(Order);