import { Resolver, Args, Mutation } from "@nestjs/graphql";
import { Query } from "@nestjs/graphql";
import { Restaurant } from './entities/restaurant.entity';
import { CreateRestaurantDto } from "./dtos/create-restaurant.dto";

@Resolver(of => Restaurant)
export class RestaurantResolver {
    
    @Query(returns => [Restaurant]) // graphql 방식 array 표현
    restaurants(@Args('veganOnly') veganOnly: boolean): Restaurant[] { // typescript 방식 array 표현
        return [];
    }

    @Mutation(returns => Boolean)
    createRestaurant(
        @Args() createRestaurantDto : CreateRestaurantDto,
    ): boolean {
        console.log(createRestaurantDto);
        return true;
    }
}

