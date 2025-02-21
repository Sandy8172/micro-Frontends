import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  emails: [
    {
      id: 1,
      Recipient: "test@testing.com",
      sender: "John Doe",
      subject: "Meeting Reminder",
      message: "Hey, just a reminder about our meeting at 3 PM.",
      starred: false,
    },
    {
      id: 2,
      Recipient: "test@testing.com",
      sender: "Alice Smith",
      subject: "Project Update",
      message: "The latest project update is attached. Please review.",
      starred: true,
    },
    {
      id: 3,
      Recipient: "test@testing.com",
      sender: "David Johnson",
      subject: "Invoice Due",
      message:
        "Your invoice for this month is due. Please process the payment.",
      starred: false,
    },
    {
      id: 4,
      Recipient: "test@testing.com",
      sender: "Sarah Brown",
      subject: "Weekend Plans",
      message: "Are we still on for the weekend trip?",
      starred: false,
    },
    {
      id: 5,
      Recipient: "test@testing.com",
      sender: "Michael Wilson",
      subject: "Job Offer",
      message: "Congratulations! We'd like to offer you the position.",
      starred: true,
    },
  ],
};
const mailSlice = createSlice({
  name: "mail",
  initialState,
  reducers: {
    addEmail: (state, action) => {
      state.emails.push(action.payload);
    },
    toggleStar: (state, action) => {
      const selectedObj = state.emails.find((ele) => ele.id === action.payload);
      if (selectedObj) {
        selectedObj.starred = !selectedObj.starred;
      }
    },
  },
});

export const { addEmail, toggleStar } = mailSlice.actions;
export const selectedEmails = (state) => state.mail.emails;
export default mailSlice.reducer;
