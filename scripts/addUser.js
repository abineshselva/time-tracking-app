// /scripts/addUser.cjs
const bcrypt = require('bcrypt');
const prisma = require('../lib/prisma.cjs'); // Ensure this path and extension are correct

const addUser = async (email, password) => {
  const saltRounds = 10;
  const hashedPassword = await bcrypt.hash(password, saltRounds);

  try {
    const user = await prisma.user.create({
      data: {
        email,
        password: hashedPassword
      }
    });
    console.log('User created:', user);
  } catch (error) {
    console.error('Error creating user:', error);
  } finally {
    await prisma.$disconnect();
  }
};

const [email, password] = process.argv.slice(2);
addUser(email, password);
