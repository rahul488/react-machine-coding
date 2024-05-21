import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  todos: [],
};

const todoSlice = createSlice({
  initialState,
  name: "todoSlice",
  reducers: {
    addTodo(state, action) {
      state.todos.push(action.payload);
    },
    updateTodo(state, action) {
      const { id, status } = action.payload;
      state[id].status = status;
    },
    deleteTodo(state, action) {
      const { id } = action.payload;
      state.todos = state.todos.filter((_, idx) => {
        return idx !== id;
      });
    },
  },
});

export default todoSlice.reducer;
export const { addTodo, updateTodo, deleteTodo } = todoSlice.actions;
