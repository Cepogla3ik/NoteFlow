import styles from "./Entry.module.scss";

export default function Entry({ slotsAmount = 0, labelsArr = [] }: { slotsAmount: number, labelsArr: string[] }) {
  return (
    <div className={styles.entry}>
      {[...Array(slotsAmount)].map((_, i) => (
        <div key={i} className={styles.slot}>
          { labelsArr[i] }
        </div>
      ))}
    </div>
  );
}