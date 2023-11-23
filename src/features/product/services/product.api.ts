import axiosClient from "../../../api/axios-client";
import { ProductData } from "./types";

const url = "/product";

export const getAllProduct = async (): Promise<ProductData[]> => {
  return await axiosClient.get(url + "/products");
};
