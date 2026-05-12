import BoardClass from "@client/features/BoardClass";
import ToolbarItem from "@shared/components/ToolbarItem/ToolbarItem";
import styles from "./ToolsBar.module.scss";

export default function ToolsBar({ boardClass }: { boardClass: BoardClass }) {
  const addSvgItem = 
    <svg width="auto" height="100%" viewBox="0 0 100 100">
      <polyline fill="none" stroke="hsl(140 90% 60%)" strokeWidth="7.5" strokeLinecap="round" strokeLinejoin="round" points="20,50 80,50 50,50 50,80 50,20" />
    </svg>;
  
  function testOnClick() {
    console.log("Clicked!");
  }
  
  const deleteSvgItem = 
    <svg width="auto" height="100%" viewBox="0 0 100 100">
      <polyline fill="none" stroke="hsl(0 90% 60%)" strokeWidth="7.5" strokeLinecap="round" strokeLinejoin="round" points="20,50 80,50" />
    </svg>;
  
  return (
    <div className={styles["tools-bar"]}>
      <ToolbarItem content={addSvgItem} onClick={() => {boardClass.addEntry()}} />
      <ToolbarItem content={deleteSvgItem} onClick={testOnClick} />
    </div>
  );
}