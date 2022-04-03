import { CartProduct, Order } from "../../../../shared/models";


export interface CartState {
   cartProducts : CartProduct[];
    orders: Order<CartProduct[]>[];
    totalSum: number;
}
