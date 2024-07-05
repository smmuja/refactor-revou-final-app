import { axiosInstance } from "api/axiosClient";
import { AxiosError } from "axios";
import { businessAddRequestProps } from "../types";

export async function businessAddRequest(payload: businessAddRequestProps) {
  try {
    const { data } = await axiosInstance.post("/business", payload);
    return data;
  } catch (error) {
    if (error instanceof AxiosError) {
      const { response } = error;
      throw new Error(response?.data?.error?.message);
    }

    throw new Error("Unexpected Error");
  }
}
