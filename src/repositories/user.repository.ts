import { PrismaClient } from '@prisma/client';
import { User, UserRepository } from '../interfaces/user.interface';

const prisma = new PrismaClient();

class UserRepositoryPrisma implements UserRepository {
  async findByEmail(email: string): Promise<User | null> {
    const user = await prisma.user.findUnique({
      where: { email },
    });
    return user;
  }

  async findById(id: string): Promise<User | null> {
    const user = await prisma.user.findUnique({
      where: { id },
    });
    return user;
  }
}

export { UserRepositoryPrisma };
