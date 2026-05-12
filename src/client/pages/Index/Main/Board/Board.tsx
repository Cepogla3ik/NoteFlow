import type { BoardProps } from "./Board.interface"; 
import styles from './Board.module.scss';

export default function Board({ content }: BoardProps) {
  
  return (
    <div className={styles.board}>{ content }</div>
  );
}