import { CertificateCreate, CertificateRepository } from '../interfaces/certificates.interface';
import { CertificateRepositoryPrisma } from '../repositories/certificates.repository';
import { UserRepository } from '../interfaces/user.interface';
import { UserRepositoryPrisma } from '../repositories/user.repository';

class CertificateUseCase {
    private certificateRepository: CertificateRepository;
    private userRepository: UserRepository;

    constructor() {
        this.certificateRepository = new CertificateRepositoryPrisma();
        this.userRepository = new UserRepositoryPrisma();
    }

    // Cria um novo certificado
    async create({ titulo, tipo, horas, data, participante, participacao, userId }: CertificateCreate) {
        // Buscar o usuário pelo ID
        const user = await this.userRepository.findById(userId);
        if (!user) {
            throw new Error('User not found');
        }

        // Validar se já existe um certificado com o mesmo email ou título
        const verifyIfExistsCertificate = await this.certificateRepository.findByEmailOrTitulo(user.email, titulo);
        if (verifyIfExistsCertificate) {
            throw new Error('Certificate already exists');
        }

        // Criar o certificado
        const certificate = await this.certificateRepository.create({
            titulo,
            tipo,
            horas,
            data,
            participante,
            participacao,
            userId,
        });

        return certificate;
    }

    // Retorna todos os certificados
    async getAll() {
        return await this.certificateRepository.getAll();
    }

    // Busca um certificado pelo ID
    async getById(id: string) {
        return await this.certificateRepository.getById(id);
    }

    // Atualiza um certificado pelo ID
    async update(id: string, data: CertificateCreate) {
        return await this.certificateRepository.update(id, data);
    }

    // Deleta um certificado pelo ID
    async delete(id: string) {
        return await this.certificateRepository.delete(id);
    }
}

export { CertificateUseCase };
