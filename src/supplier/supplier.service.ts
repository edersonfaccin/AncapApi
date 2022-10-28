import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose'
import { ListInput } from 'src/common/dto/list.input';
import { CreateSupplierInput } from './dto/create-supplier.input';
import { UpdateSupplierInput } from './dto/update-supplier.input';
import { Supplier } from './schemas/supplier.schema';

@Injectable()
export class SupplierService {
    constructor(@InjectModel('Supplier') private readonly model: Model<Supplier>){ }

    async getAllPage(pagination: ListInput) {
        const { limit, offset } = pagination;

        return await this.model.find().skip(offset).limit(limit).exec()
    }

    async getAll() {
        return await this.model.find().exec()
    }

    async getById(id: string) {
        return await this.model.findById(id).exec()
    }

    async create(data: CreateSupplierInput) {
        const createdData = new this.model(data)

        return await createdData.save()
    }

    async update(id: string, data: UpdateSupplierInput) {
        await this.model.updateOne({ _id: id }, data).exec()

        return this.getById(id)
    }

    async delete(id: string) {
        const data = await this.getById(id);
        
        return data.remove();
    }
}
