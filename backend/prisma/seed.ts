import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  await prisma.project.deleteMany();

  const defaultProjects = [
    {
      client: 'Aitest',
      imageBig: '/aitestBig.jpg',
      imageSmall1: '/aitestSmall1.jpg',
      imageSmall2: '/aitestSmall2.jpg',
      liveUrl: 'https://aitest-liart.vercel.app/',
    },
    {
      client: 'Zukko',
      imageBig: '/zukkoBig.png',
      imageSmall1: '/zukkoSmall1.png',
      imageSmall2: '/zukkoSmall2.png',
      liveUrl: 'https://zukko-pi.vercel.app/',
    },
    {
      client: 'Product',
      imageBig: '/productBig.png',
      imageSmall1: '/productSmall1.png',
      imageSmall2: '/productSmall2.png',
      liveUrl: 'https://product-project-umber.vercel.app/',
    },
    {
      client: 'Qurulish Firmasi',
      imageBig: '/qurulishBig.png',
      imageSmall1: '/qurulishSmall1.png',
      imageSmall2: '/qurulishSmall2.png',
      liveUrl: 'https://qurulish-firma.vercel.app/',
    },
    {
      client: 'Rupin Travels',
      imageBig: '/rupinBig.png',
      imageSmall1: '/rupinSmall1.png',
      imageSmall2: '/rupinSmall2.png',
      liveUrl: 'https://rupin-travels.vercel.app/',
    },
  ];

  for (const project of defaultProjects) {
    await prisma.project.create({
      data: project,
    });
  }
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
