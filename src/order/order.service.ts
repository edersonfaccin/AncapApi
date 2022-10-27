import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose'
import { Order } from './schemas/order.schema';

@Injectable()
export class OrderService {
    constructor(@InjectModel('Order') private readonly model: Model<Order>){ }

    async getAll() {
        return await this.model.find().exec()
    }

    async getById(id: string) {
        return await this.model.findById(id).exec()
    }

    async create(order: Order) {
        const createdorder = new this.model(order)

        return await createdorder.save()
    }

    async update(id: string, order: Order) {
        await this.model.updateOne({ _id: id }, order).exec()

        return this.getById(id)
    }

    async delete(id: string) {
        return await this.model.deleteOne({ _id: id }).exec()
    }
}
