import { Query, Resolver } from '@nestjs/graphql';

@Resolver()
export class HelloworldResolver {
    @Query(() => String)
    helloworld(): string {
        return 'Hola Mundo'
    }
}
