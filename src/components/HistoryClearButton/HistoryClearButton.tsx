import { useHistoryClear } from "@/entities/history";
import { Button } from "@/shared/ui/Button";

export const HistoryClearButton = () => {
  const clear = useHistoryClear();
  return (
    <Button variant="black" onClick={() => clear()}>
      Очистить всё
    </Button>
  );
};
