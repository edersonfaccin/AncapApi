import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { CoinService } from './coin.service';
import { Coin } from './schemas/coin.schema';

@Controller('coin')
export class CoinController {

    constructor(private service: CoinService){
    }

    @Get()
    async getAll() : Promise<Coin[]>{
        return this.service.getAll()
    }

    @Get(':id')
    async getById(@Param('id') id: string) : Promise<Coin>{
        return this.service.getById(id)
    }

    @Post()
    async create(@Body() data: Coin): Promise<Coin> {
        return this.service.create(data)
    }

    @Patch(':id')
    async update(@Param('id') id: string, @Body() data: Coin): Promise<Coin> {
        return this.service.update(id, data)
    }

    @Delete(':id')
    async delete(@Param('id') id: string) {
        this.service.delete(id)
    }
}
