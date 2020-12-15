import { createSlice } from "@reduxjs/toolkit";

export const chatReducer = createSlice({
  name: "name",
  initialState: {
    chatId: null,
    chatName: null
  },
  reducers: {
    setChat: (state, action) => {
      state.chatId = action.payload.chatId;
      state.chatName = action.payload.chatName;
    }
  }
});

export const { setChat } = chatReducer.actions;

export const selectChatId = state => state.chat.chatId;
export const selectChatName = state => state.chat.chatName;

export default chatReducer.reducer;
