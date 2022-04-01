import { Product } from "../../../../shared/models";



export interface ProductsState{
   products : Product[];
   isLoading: boolean;
   error:  string | null;
   selectedProduct : Product
}
