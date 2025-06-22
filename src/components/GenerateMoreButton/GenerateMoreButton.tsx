import { Button } from "@/shared/ui/Button";
import { useNavigate } from "react-router-dom";

export const GenerateMoreButton = () => {
  const navigate = useNavigate();
  return (
    <Button variant="green" onClick={() => navigate("/generator")}>
      Сгенерировать больше
    </Button>
  );
};
