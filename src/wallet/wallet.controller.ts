import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { WalletService } from './wallet.service';
import { Wallet } from './schemas/wallet.schema';

@Controller('wallet')
export class WalletController {

    constructor(private service: WalletService){
    }

    @Get()
    async getAll() : Promise<Wallet[]>{
        return this.service.getAll()
    }

    @Get(':id')
    async getById(@Param('id') id: string) : Promise<Wallet>{
        return this.service.getById(id)
    }

    @Post()
    async create(@Body() data: Wallet): Promise<Wallet> {
        return this.service.create(data)
    }

    @Patch(':id')
    async update(@Param('id') id: string, @Body() data: Wallet): Promise<Wallet> {
        return this.service.update(id, data)
    }

    @Delete(':id')
    async delete(@Param('id') id: string) {
        this.service.delete(id)
    }
}
