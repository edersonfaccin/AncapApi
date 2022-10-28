import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { CreateSupplierInput } from './dto/create-supplier.input';
import { ListInput } from '../common/dto/list.input';
import { UpdateSupplierInput } from './dto/update-supplier.input';
import { Supplier } from './schemas/supplier.schema';
import { SupplierService } from './supplier.service';

@Resolver(() => Supplier)
export class SupplierResolver {
    constructor(private readonly service: SupplierService) {}

    @Mutation(() => Supplier)
    createSupplier(@Args('data') input: CreateSupplierInput) {
        return this.service.create(input);
    }

    @Query(() => [Supplier], { name: 'supplierspage' })
    findAllPage(@Args('listSupplierInput') listSupplierInput: ListInput) {
        return this.service.getAllPage(listSupplierInput);
    }

    @Query(() => [Supplier], { name: 'suppliers' })
    findAll() {
        return this.service.getAll();
    }

    @Query(() => Supplier, { name: 'supplier' })
    findOne(@Args('_id', { type: () => String }) id: string) {
        return this.service.getById(id);
    }

    @Mutation(() => Supplier)
    updateSupplier(@Args('data') input: UpdateSupplierInput) {
        return this.service.update(input._id, input);
    }

    @Mutation(() => Supplier)
    removeSupplier(@Args('_id', { type: () => String }) id: string) {
        return this.service.delete(id);
    }
}