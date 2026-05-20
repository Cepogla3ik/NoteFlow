import Entry from "@shared/components/Entry/Entry";
import { type RootState } from "@client/store/store";
import { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setSelectedEntry } from "@client/store/slices/boardSlice";
import styles from './Board.module.scss';

export default function Board() {
  const boardEntries = useSelector((state: RootState) => state.app.board.entries);
  const selectedEntryIndex = useSelector((state: RootState) => state.app.board.selected);
  const boardElementRef = useRef(null);
  const dispatch = useDispatch();
  
  
  useEffect(() => {
    if (!boardElementRef) return;
    const boardElement = boardElementRef.current;
    
    const onClick = (e) => {
      const selectedEntryIndex = +e.target.closest('[data-index]').getAttribute('data-index');
      dispatch(setSelectedEntry(selectedEntryIndex));
    }
    
    boardElement.addEventListener('click', onClick)
    
    return () => { boardElement.removeEventListener('click', onClick) }
  }, []);
  
  return (
    <div ref={boardElementRef} className={styles.board}>
      {boardEntries.map((entry, i) => (
        <Entry 
          key={i} 
          index={i}
          selected={selectedEntryIndex === i}
          slotsAmount={entry.length}
          labelsArr={entry} 
        />
      ))}
    </div>
  );
}