import { Document } from 'mongoose';

export interface Product extends Document {
  name: string;
  price: number;
  image: string;
  start_sell_date: string;
  description: string;
  readonly created_at: Date;
}
