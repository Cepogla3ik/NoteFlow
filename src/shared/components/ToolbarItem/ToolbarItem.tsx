import React from 'react';
import styles from "./ToolbarItem.module.scss";

export default function ToolbarItem({ content, onClick }: { content: React.ReactNode, onClick: () => void }) {
  return (
    <div onClick={onClick} className={styles["toolbar-item"]}>
      { content }
    </div>
  );
}