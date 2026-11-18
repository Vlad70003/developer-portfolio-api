import { Module } from '@nestjs/common';
import { PortfolioRepository } from './portfolio.repository';
import { PortfolioController } from './portfolio.controller';
import { PortfolioService } from './portfolio.service';

@Module({ providers: [PortfolioRepository, PortfolioService, PortfolioController] })
export class PortfolioModule {}
