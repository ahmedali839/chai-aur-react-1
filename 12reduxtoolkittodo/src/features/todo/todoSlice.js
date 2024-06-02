import {createSlice, nanoid} from "@reduxjs/toolkit"
 
 const initialState ={
 
    Todos:[{id:1, text: "text world"}]
}

export const todoSlice = createSlice({
    name: "todo",
    initialState, 
    reducers: {
        addTodo: (state ,action) => {
            const todo = {
                id: nanoid(), 
                text: action.payload
            }
            state.Todos.push(todo)
        },
        removeTodo: (state, action) => {
        state.Todos =  state.Todos.filter((todo) => todo.id !== action.payload.id)
        },
        editTodo: (state, action) => {
           state.Todos =  state.Todos.map((prevTodo) => prevTodo.id === action.payload.id ? {text: action.payload.text, ...prevTodo } : prevTodo )
          } 
    }

}) 


export const {addTodo, removeTodo, editTodo} = todoSlice.actions 

export const todoReducer = todoSlice.reducer;