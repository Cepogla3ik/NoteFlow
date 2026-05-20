import Board from "./Board/Board";
import ToolsBar from "./ToolsBar/ToolsBar";
import styles from "./Main.module.scss";

export default function Main() {
  /* const board = useMemo(() => new BoardClass("BaseTest", entries), []);
  const boardItems = <BoardItems boardClass={board} />; */
  
  return (
    <main className={styles.main}>
      <ToolsBar />
      <Board />
    </main>
  );
}