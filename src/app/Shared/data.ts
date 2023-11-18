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
    updated_at: Date;
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
    cost_of_sale: number;
    suppliers: string [];
    categories: number[];
}
export interface Comment{
    id: number;
    content: string;
    created_at?: Date;
    updated_at?: Date;
    user_name: string;
    user_image: string;
    rating: number;
}
export interface Users{


}
export interface Supplier{
    id: number;
    business: string;
    name: string;
    lastName: string;
    phone?: number;
    address: string;
    email: string;
    created_at: Date;
    updated_at: Date;
}