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

    async getAll() {
        // Retornar todos os certificados
        return await this.certificateRepository.getAll();
    }

    async getById(id: string) {
        // Buscar certificado por ID
        return await this.certificateRepository.getById(id);
    }

    async update(id: string, data: CertificateCreate) {
        // Atualizar certificado
        return await this.certificateRepository.update(id, data);
    }

    async delete(id: string) {
        // Excluir certificado
        return await this.certificateRepository.delete(id);
    }
}

export { CertificateUseCase };
