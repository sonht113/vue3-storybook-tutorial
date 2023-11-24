import * as mongoose from 'mongoose';

export const ProductSchema = new mongoose.Schema({
  name: String,
  price: Number,
  image: String,
  start_sell_date: String,
  description: String,
  created_at: { type: Date, default: Date.now },
});
