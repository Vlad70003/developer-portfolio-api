import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaService } from '../prisma/prisma.service';

export const profileSelection = {
  id: true,
  name: true,
  description: true,
  githubUrl: true,
  linkedinUrl: true,
  skills: { select: { id: true, name: true }, orderBy: { name: 'asc' } },
  experience: {
    select: { id: true, company: true, position: true, startDate: true, endDate: true, achievements: true },
    orderBy: { startDate: 'desc' },
  },
  projects: { select: { id: true, name: true, description: true, url: true }, orderBy: { name: 'asc' } },
} as const satisfies Prisma.ProfileSelect;

export type PortfolioRecord = Prisma.ProfileGetPayload<{ select: typeof profileSelection }>;

@Injectable()
export class PortfolioRepository {
  constructor(private readonly prisma: PrismaService) {}

  findPublicProfile(): Promise<PortfolioRecord | null> {
    return this.prisma.profile.findUnique({
      where: { slug: 'vladislav-porokhin' },
      select: profileSelection,
    });
  }
}
