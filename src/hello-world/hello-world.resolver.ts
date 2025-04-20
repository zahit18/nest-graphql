import { Args, Float, Int, Query, Resolver } from '@nestjs/graphql';

@Resolver()
export class HelloWorldResolver {

    @Query(() => String, { description: 'hello world es lo que retorna', name: 'hellou' })
    helloWorld(): string {
        return 'hello world'
    }

    @Query(() => Float, { name: 'randomNumber' })
    getRandomNumber(): number {
        return Math.random() * 100
    }

    @Query(() => Int, { name: 'randomNumberFromZeroTo', description: 'From Zero to argument TO (default 6)' })
    getRandomNumerFromZeroTo(
        @Args('to', {nullable: true, type: () => Int}) 
        to: number = 6
    ): number {
        return Math.floor(Math.random() * to);
    }
}
