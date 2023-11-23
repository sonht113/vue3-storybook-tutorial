import { EnumStatus } from "../features/product";

export const getValueStatusTag = (status: number) => {
  switch (status) {
    case EnumStatus["OUTOFSTOCK"]:
      return "out_of_stock";
    case EnumStatus["INSTOCK"]:
      return "in_stock";
    case EnumStatus["LOWSTOCK"]:
      return "low_stock";
    default:
      break;
  }
};
