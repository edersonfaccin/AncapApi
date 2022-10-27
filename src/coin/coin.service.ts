import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose'
import { Coin } from './schemas/coin.schema';

@Injectable()
export class CoinService {
    constructor(@InjectModel('Coin') private readonly model: Model<Coin>){ }

    async getAll() {
        return await this.model.find().exec()
    }

    async getById(id: string) {
        return await this.model.findById(id).exec()
    }

    async create(data: Coin) {
        const createdData = new this.model(data)

        return await createdData.save()
    }

    async update(id: string, data: Coin) {
        await this.model.updateOne({ _id: id }, data).exec()

        return this.getById(id)
    }

    async delete(id: string) {
        return await this.model.deleteOne({ _id: id }).exec()
    }
}
