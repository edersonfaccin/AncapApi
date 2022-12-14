import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { CreateWalletInput } from './dto/create-wallet.input';
import { ListInput } from '../common/dto/list.input';
import { UpdateWalletInput } from './dto/update-wallet.input';
import { Wallet } from './schemas/wallet.schema';
import { WalletService } from './wallet.service';

@Resolver(() => Wallet)
export class WalletResolver {
    constructor(private readonly service: WalletService) {}

    @Mutation(() => Wallet)
    createWallet(@Args('data') input: CreateWalletInput) {
        return this.service.create(input);
    }

    @Query(() => [Wallet], { name: 'walletspage' })
    findAllPage(@Args('listWalletInput') listWalletInput: ListInput) {
        return this.service.getAllPage(listWalletInput);
    }

    @Query(() => [Wallet], { name: 'wallets' })
    findAll() {
        return this.service.getAll();
    }

    @Query(() => Wallet, { name: 'wallet' })
    findOne(@Args('_id', { type: () => String }) id: string) {
        return this.service.getById(id);
    }

    @Mutation(() => Wallet)
    updateWallet(@Args('data') input: UpdateWalletInput) {
        return this.service.update(input._id, input);
    }

    @Mutation(() => Wallet)
    removeWallet(@Args('_id', { type: () => String }) id: string) {
        return this.service.delete(id);
    }
}