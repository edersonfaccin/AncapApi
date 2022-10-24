import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { User } from './schemas/user.schema';
import { UserService } from './user.service';

@Controller('user')
export class UserController {

    constructor(private userService: UserService){
    }

    @Get()
    async getAll() : Promise<User[]>{
        return this.userService.getAll()
    }

    @Get(':id')
    async getById(@Param('id') id: string) : Promise<User>{
        return this.userService.getById(id)
    }

    @Post()
    async create(@Body() user: User): Promise<User> {
        return this.userService.create(user)
    }

    @Patch(':id')
    async update(@Param('id') id: string, @Body() user: User): Promise<User> {
        return this.userService.update(id, user)
    }

    @Delete(':id')
    async delete(@Param('id') id: string) {
        this.userService.delete(id)
    }
}
