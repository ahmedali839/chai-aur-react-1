// import { configureStore } from "@reduxjs/toolkit"
// import { todoSlice } from "../features/todo/todoSlice" 

// export const Store = configureStore({ 
// reducer: todoSlice
// })
 

import {configureStore} from '@reduxjs/toolkit';
import { todoReducer } from '../features/todo/todoSlice';

export const Store = configureStore({
    reducer: todoReducer
})