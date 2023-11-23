export class CreateProductDTO {
  readonly name: string;
  readonly price: string;
  readonly image: string;
  readonly status: string;
  readonly start_sell_date: string;
  readonly description: string;
  readonly created_at: Date;
}
