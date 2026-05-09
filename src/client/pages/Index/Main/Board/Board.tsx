import BoardClass from "@client/features/BoardClass";
import BoardItem from "@shared/components/BoardItem/BoardItem";
import { useMemo } from "react";
import styles from './Board.module.scss';

export default function Board({ content }) {
  
  return (
    <div className={styles.board}>{ content }</div>
  );
}