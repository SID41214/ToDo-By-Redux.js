// includes reducers and actions
import { createSlice } from "@reduxjs/toolkit";
const INITIAL_STATE = {
    data: [],
    todo: "",
  };
    const Slice = createSlice({
    name: "todos",
    initialState: INITIAL_STATE,
    reducers: {
      addtodo: (state, action) => {
        state.data.push({ id: state.data.length, todo: action.payload });
      },
      deletetodo: (state, action) => {
        state.data = state.data.filter((item) => item.id !== action.payload);
      },
      edittodo: (state, action) => {
        const { id, todo } = action.payload;
        const items = state.data.find((item) => item.id === id);
        if (items) {
          items.todo = todo;
        }
      },
      
      
    },
  });
  export const { addtodo, deletetodo, edittodo } = Slice.actions;
  export default Slice.reducer;