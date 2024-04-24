const bcrypt = require('bcryptjs');
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const password = bcrypt.hashSync('123456', 10); // Add salt rounds parameter
const userData = [
  { role: 'USER', firstName: 'Andy', lastName: 'Smith', phoneNumber: '0970687203', gender: 'MALE', email: 'andy@ggg.mail', password },
  { role: 'USER', firstName: 'Bobby', lastName: 'Johnson', phoneNumber: '0649129673', gender: 'MALE', email: 'bobby@ggg.mail', password },
  { role: 'USER', firstName: 'Candy',  lastName: 'Williams', phoneNumber: '0611214879', gender: 'FEMALE', email: 'candy@ggg.mail', password },
];

const run = async () => {
  try {
    await prisma.user.createMany({
      data: userData,
      skipDuplicates: true,
    });
    console.log('Seeding completed successfully.');
  } catch (error) {
    console.error('Error seeding data:', error);
  } finally {
    await prisma.$disconnect();
  }
};


run();
