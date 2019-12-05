export interface Usuario {
    id?: number;
    nomeCompleto?: string;
    apelido?: string;
    email?: string;
    senha?: string;
    contatos?: Contato[];
    criadoEm?: Date;
    permissoes?: any[];
}

export interface Contato {
    id?: number;
    telefone?: string;
}

export interface Categoria {
    id?: number;
    nome?: string;
    iconTag?: string;
}

export interface Anuncio {
    id?: number;
    titulo?: string;
    descricao?: string;
    preco?: number;
    cep?: string;
    uf?: string;
    ativo?: boolean;
    contato?: Contato;
    criadoEm?: Date;
    atualizadoEm?: Date;
    dataExpiracao?: Date;
    usuario?: Usuario;
    categoria?: Categoria;
    fotos?: Foto[];
}

export interface Foto {
    id?: number;
    url?: string;
}

export interface Credencial {
    email?: string;
    senha?: string;
}

export interface AnuncioFilter {
    titulo?: string;
    categoria?: string;
    uf?: string;
}
