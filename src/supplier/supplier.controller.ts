import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { Supplier } from './schemas/supplier.schema';
import { SupplierService } from './supplier.service';

@Controller('supplier')
export class SupplierController {

    constructor(private service: SupplierService){
    }

    @Get()
    async getAll() : Promise<Supplier[]>{
        return this.service.getAll()
    }

    @Get(':id')
    async getById(@Param('id') id: string) : Promise<Supplier>{
        return this.service.getById(id)
    }

    @Post()
    async create(@Body() data: Supplier): Promise<Supplier> {
        return this.service.create(data)
    }

    @Patch(':id')
    async update(@Param('id') id: string, @Body() data: Supplier): Promise<Supplier> {
        return this.service.update(id, data)
    }

    @Delete(':id')
    async delete(@Param('id') id: string) {
        this.service.delete(id)
    }
}
