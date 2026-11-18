import { PrismaClient } from '@prisma/client';
import {EXPERIENCE, PROFILE_SLUG, PROJECTS, SKILLS} from "./mock/data";

const prisma = new PrismaClient();

async function main(): Promise<void> {
  await prisma.profile.upsert({
    where: { slug: PROFILE_SLUG },
    create: {
      slug: PROFILE_SLUG,
      name: 'Порохин Владислав Андреевич',
      description: 'Fullstack разработчик',
      githubUrl: 'https://github.com/Vlad70003',
      linkedinUrl: null,
      skills: {
        create: SKILLS.map((name) => ({ name })),
      },
      experience: {
        create: EXPERIENCE,
      },

      projects: {
        create: PROJECTS,
      },
    },
    update: {
      name: 'Порохин Владислав Андреевич',
      description: 'Fullstack разработчик',
      githubUrl: 'https://github.com/Vlad70003',
      skills: {
        createMany: {
          data: SKILLS.map((name) => ({ name })),
          skipDuplicates: true,
        },
      },
      projects: {
        createMany: {
          data: PROJECTS,
          skipDuplicates: true,
        },
      },
      experience: {
        deleteMany: {
          company: {
            in: EXPERIENCE.map((item) => item.company),
          },
        },
        create: EXPERIENCE,
      },
    },
    include: {
      skills: true,
      experience: true,
      projects: true,
    },
  });
}

main()
  .catch((error: unknown) => {
    console.error('Ошибка seeding:', error);
    process.exitCode = 1;
  })
  .finally(async () => prisma.$disconnect());
