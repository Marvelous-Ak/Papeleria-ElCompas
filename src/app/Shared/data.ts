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
    PDA: number;
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
    PDA: number;
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
    id:number;
    name:string;
    lastName:string;
    email:string;
    password:string;
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
export interface ProductW{ ///producto de la bodega
    id: number;
    brand: string;
    name: string;
    quantity: number;
    price: number;
    amount: number;
    supplier_id: number;
    created_at: Date;
    updated_at: Date;
    supplier: string;
}
export interface Sale{
    id: number;
    user_name: string;
    product_name: string;
    product_brand: string;
    quantity: number;
    price: number;
    amount: number;
    PDA: number;
    profit: number;
}