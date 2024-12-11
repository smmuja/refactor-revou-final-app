import { axiosInstance } from "api/axiosClient";
import { AxiosError } from "axios";
import { productAddRequestProps } from "features/productAdd/types";

export async function productAddRequest(payload: productAddRequestProps) {
  try {
    const { data } = await axiosInstance.post("/product", payload);
    return data;
  } catch (error) {
    if (error instanceof AxiosError) {
      const { response } = error;
      throw new Error(response?.data?.error?.message);
    }

    throw new Error("Unexpected Error");
  }
}
