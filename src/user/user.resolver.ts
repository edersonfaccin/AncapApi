import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { User } from './schemas/user.schema';
import { CreateUserInput } from './dto/create-user.input';
import { UserService } from './user.service';
import { UpdateUserInput } from './dto/update-user.input';

@Resolver(() => User)
export class UserResolver {
    constructor(private service: UserService) {}

    @Mutation(() => User)
    async createUser(@Args('input') input: CreateUserInput) {
        return this.service.create(input);
    }

    @Query(() => [User], { name: 'Allusers' })
    async users() {
        return this.service.getAll();
    }

    @Query(() => User, { name: 'user' })
    findOne(@Args('id', { type: () => String }) id: string) {
        return this.service.getById(id);
    }

    @Mutation(() => User)
    updateUser(@Args('updateUserInput') input: UpdateUserInput) {
        return this.service.update(input.id, input);
    }

    @Mutation(() => User)
    removeUser(@Args('id', { type: () => String }) id: string) {
        return this.service.delete(id);
    }
}
