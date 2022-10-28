import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Supplier, SupplierSchema } from './schemas/supplier.schema';
import { SupplierResolver } from './supplier.resolver';
import { SupplierService } from './supplier.service';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Supplier.name, schema: SupplierSchema }])
  ],
  providers: [
    SupplierService,
    SupplierResolver
  ]
})
export class SupplierModule {}
