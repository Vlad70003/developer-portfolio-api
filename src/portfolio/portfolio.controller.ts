import { Query, Resolver } from '@nestjs/graphql';
import { PortfolioService } from './portfolio.service';
import { Profile } from './models/portfolio.models';
import { Get } from "@nestjs/common";

@Resolver(() => Profile)
export class PortfolioController {
  constructor(private readonly service: PortfolioService) {}

  @Get()
  @Query(() => Profile)
  profile(): Promise<Profile> {
    return this.service.getProfile();
  }
}
