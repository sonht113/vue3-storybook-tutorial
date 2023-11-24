import axiosClient from "./axios-client";

export const upload = async (
  formData: FormData
): Promise<{
  filename: string;
  originalname: string;
}> => {
  return await axiosClient.post("/upload", formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
};
