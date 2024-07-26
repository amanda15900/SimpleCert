import { UserRepository } from '../interfaces/user.interface';
import { UserRepositoryPrisma } from '../repositories/user.repository';
import { UserCreate } from '../interfaces/user.interface';

class UserUseCase {
  private userRepository: UserRepository;

  constructor() {
    this.userRepository = new UserRepositoryPrisma();
  }

  async create(data: UserCreate) {
    return await this.userRepository.create(data);
  }

  async getAllUsers() {
    return await this.userRepository.findMany();
  }

  async delete(id: string) {
    return await this.userRepository.delete(id);
  }

  async update(id: string, data: UserCreate) {
    return await this.userRepository.update(id, data);
  }

  async authenticate(email: string) {
    const user = await this.userRepository.findByEmail(email);
    if (!user) {
      throw new Error('Authentication failed');
    }
    return user;
  }
}

export { UserUseCase };
