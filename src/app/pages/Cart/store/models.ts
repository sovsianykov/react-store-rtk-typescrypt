import { CartProduct } from "../../../../shared/models";


export interface CartState {
   cartProducts : CartProduct[];
    orders: string[];
    totalSum: number;
}