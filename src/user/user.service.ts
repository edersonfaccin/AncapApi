import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose'
import { CreateUserInput } from './dto/create-user.input';
import { UpdateUserInput } from './dto/update-user.input';
import { User } from './schemas/user.schema';

@Injectable()
export class UserService {
    constructor(@InjectModel('User') private readonly model: Model<User>){ }

    async getAll() {
        return await this.model.find().lean()
    }

    async getById(id: string) {
        return await this.model.findById(id).lean()
    }

    async create(data: CreateUserInput) {
        const createdData = new this.model(data)

        return await createdData.save()
    }

    async update(id: string, data: UpdateUserInput) {
        await this.model.updateOne({ _id: id }, data).exec()

        return this.getById(id)
    }

    async delete(id: string) {
        return await this.model.deleteOne({ _id: id }).exec()
    }
}
