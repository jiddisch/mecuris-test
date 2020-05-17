export interface Cart {
  id: number;
  name: string;
  amount: number;
  size?: number;
  color?: string;
  price: number;
  totalPrice?: number;
  date: number;
}
