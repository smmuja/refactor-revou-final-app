import { axiosInstance } from "api/axiosClient";
import { AxiosError } from "axios";
import { BusinessesPublic } from "../types";

export async function businessesResponse() {
  try {
    const { data } = await axiosInstance
      .get<BusinessesPublic>("/business")
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
