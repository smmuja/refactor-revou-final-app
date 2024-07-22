import { axiosInstance } from "api/axiosClient";
import { AxiosError } from "axios";
import { businessDetailResponseProps } from "features/businessDetail";

export async function businessDetailResponse(id: string) {
  try {
    const { data } = await axiosInstance.get<businessDetailResponseProps>(
      `/business/${id}`
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
