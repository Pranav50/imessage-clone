import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userReducer";
import chatReducer from "./chatReducer";
export default configureStore({
  reducer: {
    user: userReducer,
    chat: chatReducer
  }
});
