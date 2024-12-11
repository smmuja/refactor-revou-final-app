import { axiosInstance } from "api/axiosClient";
import { AxiosError } from "axios";
import { ProductsPublic } from "../types";

export async function productsResponse() {
  try {
    const { data } = await axiosInstance
      .get<ProductsPublic>("/product")
      .then((d) => d.data);
    return data;
  } catch (error) {
    if (error instanceof AxiosError) {
      const { response } = error;
      throw new Error(response?.data?.error?.message);
    }
    throw new Error("Unexpected Error");
  }
}
