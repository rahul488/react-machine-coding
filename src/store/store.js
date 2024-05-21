import { configureStore } from '@reduxjs/toolkit'
import todosReducer from './features/todo'

export const store = configureStore({
  reducer: {
    todos: todosReducer,
  },
})