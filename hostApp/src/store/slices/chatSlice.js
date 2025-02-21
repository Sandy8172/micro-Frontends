import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  messages: [
    {
      id: 1,
      user: "Sandeep Singh",
      time: "11:46",
      text: "That's awesome. I think our users will really appreciate the improvements.",
      sender: "other",
    },
    {
      id: 2,
      user: "You",
      time: "11:47",
      text: "Yes, let's finalize the UI.",
      sender: "me",
    },

    {
      id: 3,
      user: "Bonnie Green",
      time: "11:55",
      text: "No, looks perfect!",
      sender: "other",
    },
  ],
};

const chatSlice = createSlice({
  name: "chat",
  initialState,
  reducers: {
    addMessage: (state, action) => {
      state.messages.push(action.payload);
    },
  },
});

export const { addMessage } = chatSlice.actions;
export const selectedMessages = (state) => state.chat.messages;

export default chatSlice.reducer;
