import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { Supplier } from './schemas/supplier.schema';
import { SupplierService } from './supplier.service';

@Controller('supplier')
export class SupplierController {

    constructor(private supplierService: SupplierService){
    }

    @Get()
    async getAll() : Promise<Supplier[]>{
        return this.supplierService.getAll()
    }

    @Get(':id')
    async getById(@Param('id') id: string) : Promise<Supplier>{
        return this.supplierService.getById(id)
    }

    @Post()
    async create(@Body() supplier: Supplier): Promise<Supplier> {
        return this.supplierService.create(supplier)
    }

    @Patch(':id')
    async update(@Param('id') id: string, @Body() supplier: Supplier): Promise<Supplier> {
        return this.supplierService.update(id, supplier)
    }

    @Delete(':id')
    async delete(@Param('id') id: string) {
        this.supplierService.delete(id)
    }
}
