import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { OrderService } from './order.service';
import { Order } from './schemas/order.schema';

@Controller('order')
export class OrderController {

    constructor(private orderService: OrderService){
    }

    @Get()
    async getAll() : Promise<Order[]>{
        return this.orderService.getAll()
    }

    @Get(':id')
    async getById(@Param('id') id: string) : Promise<Order>{
        return this.orderService.getById(id)
    }

    @Post()
    async create(@Body() order: Order): Promise<Order> {
        return this.orderService.create(order)
    }

    @Patch(':id')
    async update(@Param('id') id: string, @Body() order: Order): Promise<Order> {
        return this.orderService.update(id, order)
    }

    @Delete(':id')
    async delete(@Param('id') id: string) {
        this.orderService.delete(id)
    }
}
