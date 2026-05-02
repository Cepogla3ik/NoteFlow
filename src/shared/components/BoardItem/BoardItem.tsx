import BoardClass from "@client/features/BoardClass";
import Entry from "@shared/components/Entry/Entry";

export default function BoardItem({ boardClass }: { boardClass: BoardClass }) {  
  return (
    <>
      { [...Array(boardClass.size())].map((_, i) => (<Entry key={i} slotsAmount={boardClass.size(i)} labelsArr={boardClass.entriesList[i]} />))}
    </>
  );
}