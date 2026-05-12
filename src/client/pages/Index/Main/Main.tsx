import Board from "./Board/Board";
import ToolsBar from "./ToolsBar/ToolsBar";
import BoardClass from "@client/features/BoardClass";
import BoardItems from "@shared/components/BoardItems/BoardItems";
import { useMemo } from "react";
import styles from "./Main.module.scss";

export default function Main() {
  const entries = [["1", "Lesson", "202"], ["2", "Lesson_2", "203"]];
  const board = useMemo(() => new BoardClass("BaseTest", entries), []);
  const boardItems = <BoardItems boardClass={board} />;
  
  return (
    <main className={styles.main}>
      <ToolsBar boardClass={board} />
      <Board content={boardItems} />
    </main>
  );
}