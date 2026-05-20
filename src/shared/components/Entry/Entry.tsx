import { useRef } from "react";
import { useSelector } from "react-redux";
import styles from "./Entry.module.scss";

export default function Entry({ slotsAmount = 0, labelsArr = [], selected, index }: { slotsAmount: number, labelsArr: string[], selected: boolean, index: number }) {
  const entryElementRef = useRef(null);
  
  return (
    <div ref={entryElementRef} data-index={index} className={styles.entry}>
      {[...Array(slotsAmount)].map((_, i) => (
        <span key={i} className={styles.slot}>
          { labelsArr[i] }
        </span>
      ))}
    </div>
  );
}