import BoardClass from "@client/features/Board";
import { useMemo } from "react";
import EntryItem from "@shared/components/EntryItem/EntryItem";
import styles from './Board.module.scss';

export default function Board() {
  const entries = [["1", "Lesson", "202"], ["2", "Lesson_2", "203"]];
  const board = useMemo(() => new BoardClass("BaseTest", entries), []);
  
  return (
    <div className={styles.board}>
      <EntryItem amount={board.size} label={entries[0]} />
    </div>
  );
}