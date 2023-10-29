export interface Product{
    brand: string;
    name: string;
    image: string;
    price: number;
    pricePromo: number;
    promo: boolean;
    description: string;
    stock: number;
    id: number;
    created_at: Date;
}

export interface ProductPost{
    brand: string;
    name: string;
    image?: string;
    price?: number;
    pricePromo?: number;
    promo: boolean;
    description: string;
    stock?: number;
    categories: number[];
}