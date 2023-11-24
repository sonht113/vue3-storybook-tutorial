import axiosClient from "../../../api/axios-client";
import { ProductData, ProductDataMutation } from "./types";

const url = "/product";

export const getAllProduct = async (): Promise<ProductData[]> => {
  return await axiosClient.get(url + "/products");
};

export const getProduct = async (id: string): Promise<ProductData> => {
  return await axiosClient.get(url + `/${id}`);
};

export const createProduct = async (body: ProductDataMutation) => {
  return await axiosClient.post(url + "/create", body);
};

export const updateProduct = async (
  productId: string,
  body: ProductDataMutation
) => {
  return await axiosClient.put(url + "/update", body, {
    params: {
      productId,
    },
  });
};

export const deleteProduct = async (productId: string) => {
  return await axiosClient.delete(url + "/delete", {
    params: {
      productId,
    },
  });
};
