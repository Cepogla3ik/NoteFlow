import Entry from "@shared/components/Entry/Entry";
import type { BoardItemsProps } from "./BoardItemsProps.interface";
import { useSelector } from "react-redux";
import { RootState } from "@client/app/store";

export default function BoardItems({ boardClass }: BoardItemsProps) {  
  return (
    <>
      { [...Array(boardClass.size())].map((_, i) => (<Entry key={i} slotsAmount={boardClass.size(i)} labelsArr={boardClass.entriesList[i]} />))}
    </>
  );
}