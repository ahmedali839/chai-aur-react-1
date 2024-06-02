import react, {useContext, createContext} from "react" 
 
export const TodoContext = createContext({ 
 todos: [
    { 
        id: 1,
        todo: "todo Msg",
        completed: false
    }
 ],
 addTodo: (todo) => {},
 EditTodo: (id, todo) => {},
 DeleteTodo: (id) => {},
 toggleComplete: (todo) => {},

}) 



export const TodoProvider = TodoContext.Provider 

export default function useTodo(){
    return useContext(TodoContext)
} 

