export interface Product {
  id: number;
  name: string;
  url: string;
  price: number;
  currency: string;
}

export interface CartProduct extends Product {
  quantity : number;
}