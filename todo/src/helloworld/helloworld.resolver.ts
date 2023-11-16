import { Args, Float, Int, Query, Resolver } from '@nestjs/graphql';

@Resolver()
export class HelloworldResolver {
    @Query(() => String, { description: 'Is the first resolver in Graphql', name: 'First_program' })
    helloworld(): string {
        return 'Hola Mundo'
    }

    @Query(() => Float, { description: 'This resolver return a random number', name: 'Random_Number' })
    getRandomNumber(): number {
        return Math.random()
    }

    @Query(() => Int, { name: 'Random_From_Zero_To' })
    getRandomFromZeroTo(@Args('to', { nullable: true, type: () => Int }) to: number = 10): number {
        return Math.floor(Math.random() * to)
    }
}
