import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { User } from './schemas/user.schema';
import { UserService } from './user.service';

@Controller('user')
export class UserController {

    constructor(private service: UserService){
    }

    @Get()
    async getAll() : Promise<User[]>{
        return this.service.getAll()
    }

    @Get(':id')
    async getById(@Param('id') id: string) : Promise<User>{
        return this.service.getById(id)
    }

    @Post()
    async create(@Body() data: User): Promise<User> {
        return this.service.create(data)
    }

    @Patch(':id')
    async update(@Param('id') id: string, @Body() data: User): Promise<User> {
        return this.service.update(id, data)
    }

    @Delete(':id')
    async delete(@Param('id') id: string) {
        this.service.delete(id)
    }
}
