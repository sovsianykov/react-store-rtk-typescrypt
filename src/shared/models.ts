export interface Product {
  id: number;
  name: string;
  url: string;
  price: number;
  currency: string;
  description: string;
}

export interface CartProduct extends Product {
  quantity : number;
}
export interface Order<T>  {
  id: number | string;
  date: string;
  items : T
}
