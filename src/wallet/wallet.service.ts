import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose'
import { Wallet } from './schemas/wallet.schema';

@Injectable()
export class WalletService {
    constructor(@InjectModel('Wallet') private readonly model: Model<Wallet>){ }

    async getAll() {
        return await this.model.find().exec()
    }

    async getById(id: string) {
        return await this.model.findById(id).exec()
    }

    async create(data: Wallet) {
        const createdData = new this.model(data)

        return await createdData.save()
    }

    async update(id: string, data: Wallet) {
        await this.model.updateOne({ _id: id }, data).exec()

        return this.getById(id)
    }

    async delete(id: string) {
        return await this.model.deleteOne({ _id: id }).exec()
    }
}
