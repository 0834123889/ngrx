import { Product } from "../models/product.model";

export interface ProductState {
    products: Array<Product>,
    loading: boolean,
    error: string
}

export interface addProductState {
    product: Product,
    isSuccess: boolean,
    error: string
}