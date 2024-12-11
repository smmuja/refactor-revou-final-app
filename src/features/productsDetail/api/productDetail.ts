import { axiosInstance } from "api/axiosClient";
import { ProductDetailResponseProps } from "../types";
import { AxiosError } from "axios";

export async function ProductDetailResponse(id: string) {
  try {
    const { data } = await axiosInstance.get<ProductDetailResponseProps>(
      `/product/${id}`
    );
    return data;
  } catch (error) {
    if (error instanceof AxiosError) {
      const { response } = error;
      throw new Error(response?.data?.error?.message);
    }
    throw new Error("Unexpected Error");
  }
}
