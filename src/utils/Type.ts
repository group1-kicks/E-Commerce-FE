export interface ItemTypes {
  product_id: number;
  product_name: string;
  description: string;
  seller_name: string;
  city: string;
  price: number;
  stock: number;
  image: string;
}

export interface UserTypes {
  username: string;
  name: string;
  email: string;
  city: string;
  phone: string;
  product: [
    {
      product_id: number;
      image: string;
      product_name: string;
      price: number;
      stock: number;
    }
  ];
}
