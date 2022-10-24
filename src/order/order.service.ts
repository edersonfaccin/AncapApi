import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose'
import { Order } from './schemas/order.schema';

@Injectable()
export class OrderService {
    constructor(@InjectModel('Order') private readonly orderModel: Model<Order>){ }

    async getAll() {
        return await this.orderModel.find().exec()
    }

    async getById(id: string) {
        return await this.orderModel.findById(id).exec()
    }

    async create(order: Order) {
        const createdorder = new this.orderModel(order)

        return await createdorder.save()
    }

    async update(id: string, order: Order) {
        await this.orderModel.updateOne({ _id: id }, order).exec()

        return this.getById(id)
    }

    async delete(id: string) {
        return await this.orderModel.deleteOne({ _id: id }).exec()
    }
}
