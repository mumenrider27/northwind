import { Product } from "./product";

export interface ProductResponseModel{
    data:Product[],
    success: boolean,
    message: string
}