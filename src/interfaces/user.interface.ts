// Definição do modelo User
export interface User {
  id: string;
  name: string;
  email: string;
}

// Definição do modelo UserCreate para criação de usuário
export interface UserCreate {
  name: string;
  email: string;
}

// Interface do repositório de usuários
export interface UserRepository {
  findByEmail(email: string): Promise<User | null>;
  findById(id: string): Promise<User | null>;
  create(data: UserCreate): Promise<User>;
}
