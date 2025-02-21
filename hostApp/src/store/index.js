import { configureStore } from "@reduxjs/toolkit";
import chatReducer from "./slices/chatSlice";
import mailReducer from "./slices/mailSlice";

const store = configureStore({
  reducer: {
    chat: chatReducer,
    mail: mailReducer,
  },
});

export default store;
