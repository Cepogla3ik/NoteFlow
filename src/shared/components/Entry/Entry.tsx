import styles from "./Entry.module.scss";

export default function Entry({ slotsAmount = 0, labelsArr = [], selected, index }: { slotsAmount: number, labelsArr: string[], selected: boolean, index: number }) {
  return (
    <div data-index={index} className={`${styles.entry} ${selected ? styles.selected : ''}`}>
      {[...Array(slotsAmount)].map((_, i) => (
        <span key={i} className={styles.slot}>
          { labelsArr[i] }
        </span>
      ))}
    </div>
  );
}