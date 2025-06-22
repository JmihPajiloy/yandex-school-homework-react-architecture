import { useState } from "react";
import { useHistory, useHistoryPop } from "@/entities/history";
import { HistoryItem } from "@/shared/ui/HistoryItem";
import { DeleteButton } from "@/shared/ui/DeleteButton";
import styles from "./HistoryList.module.css";
import { Modal } from "@/shared/ui/Modal";
import { ModalStatsList } from "@/components/ModalStatsList/ModalStatsList.tsx";

export const HistoryList = () => {
  const history = useHistory();
  const pop = useHistoryPop();

  const [openedModalID, setOpenedModalID] = useState<number>(-1);
  return (
    <div className={styles.list}>
      {history.map((item, index) => (
        <div key={index} className={styles.item}>
          <HistoryItem
            onClick={() => item.isSuccess && setOpenedModalID(index)}
            filename={item.filename}
            date={new Date(item.date)}
            isSuccess={item.isSuccess}
          />
          <DeleteButton onClick={() => pop(index)} />
          <Modal
            open={openedModalID === index}
            onOpenChange={() =>
              openedModalID === index ? setOpenedModalID(-1) : null
            }
          >
            {item.isSuccess && <ModalStatsList {...item.stats} />}
          </Modal>
        </div>
      ))}
    </div>
  );
};
