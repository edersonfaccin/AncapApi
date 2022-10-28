import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose'
import { CreateWalletInput } from './dto/create-wallet.input';
import { ListWalletInput } from './dto/list-wallet.input';
import { UpdateWalletInput } from './dto/update-wallet.input';
import { Wallet } from './schemas/wallet.schema';

@Injectable()
export class WalletService {
    constructor(@InjectModel('Wallet') private readonly model: Model<Wallet>){ }

    async getAllPage(pagination: ListWalletInput) {
        const { limit, offset } = pagination;

        return await this.model.find().skip(offset).limit(limit).exec()
    }

    async getAll() {
        return await this.model.find().exec()
    }

    async getById(id: string) {
        return await this.model.findById(id).exec()
    }

    async create(data: CreateWalletInput) {
        const createdData = new this.model(data)

        return await createdData.save()
    }

    async update(id: string, data: UpdateWalletInput) {
        await this.model.updateOne({ _id: id }, data).exec()

        return this.getById(id)
    }

    async delete(id: string) {
        const data = await this.getById(id);
        
        return data.remove();
    }
}
