import { useUpload } from "./useUpload";

export const UploadSubmit = () => {
  const { setState, file } = useUpload();
  const onClick = async () => {
    setState("pending");
    try {
    } catch (error) {
      console.warn(error);
      setState("error");
    }
  };
};
