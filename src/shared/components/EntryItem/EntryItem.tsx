import styles from "./EntryItem.module.scss";

export default function EntryItem({ amount = 0, labels = [] }: { amount: number, labels: string[] }) {
  return (
    <div className={styles.entry}>
      { for (let i = 0; i < amount; i++) { return <div className={styles.slot}>{ labels[i] }</div> } }
    </div>
  );
}