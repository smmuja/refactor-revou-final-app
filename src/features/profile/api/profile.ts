import { axiosInstance } from "api/axiosClient";
import { AxiosError } from "axios";
import { profileResponseProps } from "features/profile";

export async function profileResponse() {
  try {
    const { data } = await axiosInstance.get<profileResponseProps>(
      "/user/sign-in"
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
