import BoardClass from "@client/features/BoardClass";
import BoardItem from "@shared/components/BoardItem/BoardItem";
import { useMemo } from "react";
import styles from './Board.module.scss';

export default function Board() {
  const entries = [["1", "Lesson", "202"], ["2", "Lesson_2", "203"]];
  const board = useMemo(() => new BoardClass("BaseTest", entries), []);
  board.addEntry(["LessonLessonLesson", "104", "8"]);
  
  return (
    <div className={styles.board}>
      <BoardItem boardClass={board} />
    </div>
  );
}