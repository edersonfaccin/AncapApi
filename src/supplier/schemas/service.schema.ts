import { Field, ObjectType } from '@nestjs/graphql';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Schema as MongooseSchema } from 'mongoose';

export type ServiceDocument = Service & Document;

@Schema()
@ObjectType()
export class Service {
    
    @Field(() => String)
    _id: MongooseSchema.Types.ObjectId;

    @Prop({ required: true, default: '' })
    @Field(() => String, { description: 'Service name' })
    name: string;

    @Prop({ required: false, default: '' })
    @Field(() => String, { description: 'Service notes' })
    notes: string;

    @Prop({ required: false, default: 0 })
    @Field(() => Number, { description: 'Service value' })
    value: number;

    @Prop({ required: true, default: true })
    @Field(() => Boolean, { description: 'Service active' })
    active: boolean;

    @Prop({ required: true, default: Date.now() })
    @Field(() => Date, { description: 'Service date register' })
    date_register: Date
}

export const ServiceSchema = SchemaFactory.createForClass(Service);
