import { Float, Int, Query, Resolver } from '@nestjs/graphql';

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

    @Query(() => Int, { name: 'randomNumberFromZeroTo' })
    getRandomNumerFromZeroTo() {
        const max = 10
        return Math.floor(Math.random() * max);
    }
}
