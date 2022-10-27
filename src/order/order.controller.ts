import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { OrderService } from './order.service';
import { Order } from './schemas/order.schema';

@Controller('order')
export class OrderController {

    constructor(private service: OrderService){
    }

    @Get()
    async getAll() : Promise<Order[]>{
        return this.service.getAll()
    }

    @Get(':id')
    async getById(@Param('id') id: string) : Promise<Order>{
        return this.service.getById(id)
    }

    @Post()
    async create(@Body() data: Order): Promise<Order> {
        return this.service.create(data)
    }

    @Patch(':id')
    async update(@Param('id') id: string, @Body() data: Order): Promise<Order> {
        return this.service.update(id, data)
    }

    @Delete(':id')
    async delete(@Param('id') id: string) {
        this.service.delete(id)
    }
}
