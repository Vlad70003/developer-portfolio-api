import { Injectable, NotFoundException } from '@nestjs/common';
import { PortfolioRepository, PortfolioRecord } from './portfolio.repository';

@Injectable()
export class PortfolioService {
  constructor(private readonly repository: PortfolioRepository) {}

  async getProfile(): Promise<PortfolioRecord> {
    const profile = await this.repository.findPublicProfile();

    if (!profile) throw new NotFoundException('Портфолио не загрузилось');

    return profile;
  }
}
