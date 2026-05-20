import { createSlice } from "@reduxjs/toolkit";
import { type PayloadAction } from "@reduxjs/toolkit";

interface BoardState {
  name: string;
  selected: number | null;
  entries: Array<Array<string>>;
};

const initialState: BoardState = {
  name: "BaseTest",
  selected: null,
  entries: [["1", "Lesson", "202"], ["2", "Lesson_2", "203"]],
};

const boardSlice = createSlice({
  name: 'board',
  initialState,
  reducers: {
    addEntry: (state, action: PayloadAction<Array<string> | undefined>) => {
      const entry = action.payload;
      
      if (entry) {
        state.entries.push(entry);
      } else {
        const lastEntry = state.entries[state.entries.length - 1];
        
        if (lastEntry && lastEntry.length > 0) {
          const emptyEntry = new Array(lastEntry.length).fill("");
          state.entries.push(emptyEntry);
        } else {
          state.entries.push([""]);
        }
      }
    },
    deleteEntry: (state) => {
      state.entries = state.entries.filter((_, i) => i !== state.selected); // deleting fixing
      console.log("Filtered:", state.entries.filter((_, i) => i !== state.selected));
    },
    setSelectedEntry: (state, action: PayloadAction<number>) => {
      if (action.payload < 0 || action.payload >= state.entries.length || action.payload === state.selected) return;

      state.selected = action.payload ?? state.selected;
      console.log("Selected:", state.selected);
    }
  }
});

export const { addEntry, deleteEntry, setSelectedEntry } = boardSlice.actions;
export default boardSlice.reducer;