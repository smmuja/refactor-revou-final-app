import { axiosInstance } from "api/axiosClient";
import { AxiosError } from "axios";
import { BusinessEditRequestProps } from "features/businessEdit/types";

export async function BusinessEditRequest(
  payload: BusinessEditRequestProps,
  id: string
) {
  try {
    const { data } = await axiosInstance.put(`/business/${id}`, payload);
    console.log(data);
    return data;
  } catch (error) {
    if (error instanceof AxiosError) {
      const { response } = error;
      throw new Error(response?.data.error.message);
    }
    throw new Error("Unexpected Error");
  }
}
