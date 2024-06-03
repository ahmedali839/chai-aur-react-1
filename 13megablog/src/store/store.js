import {configureStore} from "@reduxjs/toolkit" 
 import authSlice from "./authSlice"; 
 import postSlice from "./postSlice";

 export const store = configureStore({
     reducer : {
     auth: authSlice,
      posts : postSlice
     }
 });
 export default store
 

//  src/store.js
// import { configureStore } from "@reduxjs/toolkit";
// import authReducer from "./slices/authSlice";
// import postReducer from "./slices/postSlice";
// import authSlice from "./authSlice";
// import postSlice from "./postSlice";

// export const store = configureStore({
//   reducer: {
//     auth: authSlice,
//     posts: postSlice
//   }
// });
