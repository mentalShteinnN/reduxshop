export interface Category {
    id: number;
    title: string;
    image?: string;
    createdAt: string;
    updatedAt: string;
}

export interface CategoriesProps {
    extendButton?: boolean;
}
