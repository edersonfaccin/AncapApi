import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose'
import { Supplier } from './schemas/supplier.schema';

@Injectable()
export class SupplierService {
    constructor(@InjectModel('Supplier') private readonly supplierModel: Model<Supplier>){ }

    async getAll() {
        return await this.supplierModel.find().exec()
    }

    async getById(id: string) {
        return await this.supplierModel.findById(id).exec()
    }

    async create(supplier: Supplier) {
        const createdsupplier = new this.supplierModel(supplier)

        return await createdsupplier.save()
    }

    async update(id: string, supplier: Supplier) {
        await this.supplierModel.updateOne({ _id: id }, supplier).exec()

        return this.getById(id)
    }

    async delete(id: string) {
        return await this.supplierModel.deleteOne({ _id: id }).exec()
    }
}
