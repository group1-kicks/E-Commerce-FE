export interface ItemTypes {
  product_id: number;
  product_name: string;
  description: string;
  seller_name: string;
  city: string;
  price: number;
  stock: number;
  image: string;
  created_date: string;
}

export interface UserTypes {
  username: string;
  fullname: string;
  email: string;
  city: string;
  address: string;
  phone: string;
  product: [
    {
      product_id: number;
      image: string;
      name: string;
      price: number;
      stock: number;
    }
  ];
}

export interface OrdersTypes {
  order_id: number;
  invoice: string;
  order_date: string;
  order_status: string;
}
