export interface Certificate {
    id: string;
    titulo: string;
    tipo: string;
    horas: number;
    data: Date;
    participante: string;
    participacao: string;
    userId: string;
}

export interface CertificateCreate {
    titulo: string;
    tipo: string;
    horas: number;
    data: Date;
    participante: string;
    participacao: string;
    userId: string;
}

export interface CertificateRepository {
    create(data: CertificateCreate): Promise<Certificate>;
    findByEmailOrTitulo(email: string, titulo: string): Promise<Certificate | null>;
    getAll(): Promise<Certificate[]>;
    getById(id: string): Promise<Certificate | null>;
    update(id: string, data: CertificateCreate): Promise<Certificate | null>;
    delete(id: string): Promise<Certificate | null>;
}
