export type ProductData = {
  _id: string;
  name: string;
  price: number;
  image: string;
  description: string;
  start_sell_date: string;
  created_at: string;
};

export type ProductDataMutation = Partial<
  Omit<ProductData, "created_at" | "_id">
>;
