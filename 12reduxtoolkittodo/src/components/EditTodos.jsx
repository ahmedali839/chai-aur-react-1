// import React from "react";
// import { useDispatch } from "react-redux";
// import { editTodo } from  "../features/todo/todoSlice.js" 


// function UpdateTodo({ todo }) {
  
//   const [text, setText] = React.useState(todo.text)
//     // const todos = useSelector(state => state.Edittodo)
//     const dispatch = useDispatch() 

//     const handelTodo = () => {  
//       dispatch(editTodo({
//         id: todo.id,
//         text
//       }));
//     };
    
//   return (
//     <div> 
//     <input 
//     type="text"
//     value={text}
//     onChange={(e) => setText(e.target.value)}

//      /> 
//      <button onClick={handelTodo} >Save</button>
//     </div>
//   );
// };
// export default UpdateTodo 


// src/components/EditTodo.js
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { editTodo } from "../features/todo/todoSlice";


const editTodos = ({ todo }) => {
  
  const dispatch = useDispatch(); 
  const [text, setText] = useState(todo.text);

  const handleSave = () => {
    dispatch(editTodo({
      id: todo.id,
      text
    }));
  };

  return (
    <div>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button onClick={handleSave}>Save</button>
    </div>
  );
};

export default editTodos;