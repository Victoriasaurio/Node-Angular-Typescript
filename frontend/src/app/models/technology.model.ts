//Esquema de technology, debe ser igual al esquema del backend
export interface Technology {
    _id: string;
    name: string;
    description: string;
    logo: string;
    tags: string[];
    createdAt: Date;
    updatedAt: Date;
}