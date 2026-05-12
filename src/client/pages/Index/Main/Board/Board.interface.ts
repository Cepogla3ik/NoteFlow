import React from "react";
import type { BoardItemsProps } from "@shared/components/BoardItems/BoardItemsProps.interface";

type BoardContent = React.ReactElement<BoardItemsProps>;

export interface BoardProps {
  content: BoardContent
}