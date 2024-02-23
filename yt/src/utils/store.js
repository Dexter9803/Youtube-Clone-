import { configureStore } from "@reduxjs/toolkit";
import appSlice from "./appSlice";
import searchSlice from "./searchSlice";
import chatSlice from "./chatSlice";
import querySearchSlice from "./querySearchSlice";
import replySlice from "./replySlice";

const store = configureStore({
  reducer: {
    app: appSlice,
    search: searchSlice,
    chat: chatSlice,
    query: querySearchSlice,
    reply: replySlice
  },
});

export default store;
