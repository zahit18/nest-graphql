import { Query, Resolver } from '@nestjs/graphql';

@Resolver()
export class HelloWorldResolver {

    @Query(() => String)
    helloWorld(): string {
        return 'hello world'
    }
}
