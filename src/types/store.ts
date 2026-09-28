export type Size = 'XS' | 'S' | 'M' | 'L' | 'XL' | 'XXL';

export interface Product {
  id: string;
  name: string;
  kanji: string;
  price: number;
  originalPrice?: number;
  tag?: string;
  description: string;
  weightGsm: number;
  image: string;
  sizes: Size[];
  isSale?: boolean;
}

export interface CartItem {
  productId: string;
  size: Size;
  quantity: number;
  product: Product;
}
