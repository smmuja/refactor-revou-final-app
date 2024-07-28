import { axiosInstance } from "api/axiosClient";
import { AxiosError } from "axios";
import { ProfileEditRequestProps } from "features/profileEdit/types";

export async function profileEditRequest(payload: ProfileEditRequestProps) {
  try {
    const { data } = await axiosInstance.put("/user", payload);
    return data;
  } catch (error) {
    if (error instanceof AxiosError) {
      const { response } = error;
      throw new Error(response?.data.error.message);
    }
    throw new Error("Unexpected Error");
  }
}
