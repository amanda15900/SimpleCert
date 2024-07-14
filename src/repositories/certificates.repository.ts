import { PrismaClient } from '@prisma/client';
import { Certificate, CertificateCreate, CertificateRepository } from '../interfaces/certificates.interface';

const prisma = new PrismaClient();

class CertificateRepositoryPrisma implements CertificateRepository {
    async create(data: CertificateCreate): Promise<Certificate> {
        const certificate = await prisma.certificate.create({
            data: {
                titulo: data.titulo,
                tipo: data.tipo,
                horas: data.horas,
                data: data.data,
                participante: data.participante,
                participacao: data.participacao,
                userId: data.userId,
            },
        });
        return certificate;
    }

    async findByEmailOrTitulo(email: string, titulo: string): Promise<Certificate | null> {
        const certificate = await prisma.certificate.findFirst({
            where: {
                OR: [
                    { user: { email: email } },
                    { titulo: titulo },
                ],
            },
            include: { user: true },
        });
        return certificate;
    }

    async getAll(): Promise<Certificate[]> {
        return await prisma.certificate.findMany({
            include: { user: true },
        });
    }

    async getById(id: string): Promise<Certificate | null> {
        return await prisma.certificate.findUnique({
            where: { id },
            include: { user: true },
        });
    }

    async update(id: string, data: CertificateCreate): Promise<Certificate | null> {
        const certificate = await prisma.certificate.update({
            where: { id },
            data: {
                titulo: data.titulo,
                tipo: data.tipo,
                horas: data.horas,
                data: data.data,
                participante: data.participante,
                participacao: data.participacao,
                userId: data.userId,
            },
        });
        return certificate;
    }

    async delete(id: string): Promise<Certificate | null> {
        const certificate = await prisma.certificate.delete({
            where: { id },
        });
        return certificate;
    }
}

export { CertificateRepositoryPrisma };
