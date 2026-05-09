import Board from "./Board/Board";
import ToolsBar from "./ToolsBar/ToolsBar";
import BoardClass from "@client/features/BoardClass";
import BoardItem from "@shared/components/BoardItem/BoardItem";
import { useMemo } from "react";
import styles from "./Main.module.scss";

export default function Main() {
  const entries = [["1", "Lesson", "202"], ["2", "Lesson_2", "203"]];
  const board = useMemo(() => new BoardClass("BaseTest", entries), []);
  const boardItem = <BoardItem boardClass={board} />;
  
  return (
    <main className={styles.main}>
      <ToolsBar boardClass={board} />
      <Board content={boardItem} />
    </main>
  );
}