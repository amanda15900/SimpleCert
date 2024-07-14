import { PrismaClient } from '@prisma/client';
import { User, UserCreate, UserRepository } from '../interfaces/user.interface';

const prisma = new PrismaClient();

class UserRepositoryPrisma implements UserRepository {
  // Encontra um usuário pelo email
  async findByEmail(email: string): Promise<User | null> {
    const user = await prisma.user.findUnique({
      where: { email },
    });
    return user;
  }

  // Encontra um usuário pelo ID
  async findById(id: string): Promise<User | null> {
    const user = await prisma.user.findUnique({
      where: { id },
    });
    return user;
  }

  // Cria um novo usuário
  async create(data: UserCreate): Promise<User> {
    const user = await prisma.user.create({
      data: {
        name: data.name,
        email: data.email,
      },
    });
    return user;
  }
}

export { UserRepositoryPrisma };
