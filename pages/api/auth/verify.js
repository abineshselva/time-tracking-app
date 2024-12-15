import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default async function handler(req, res) {
  const { query: { token } } = req;

  try {
    // Find user by verification token
    const user = await prisma.user.findUnique({
      where: { verificationToken: token },
    });

    if (!user) {
      return res.status(400).json({ error: 'Invalid or expired token' });
    }

    // Update user to be verified
    await prisma.user.update({
      where: { id: user.id },
      data: {
        isVerified: true,
        verificationToken: null, // Remove the token
      },
    });

    res.status(200).json({ message: 'Email verified successfully. You can now sign in.' });
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
}
