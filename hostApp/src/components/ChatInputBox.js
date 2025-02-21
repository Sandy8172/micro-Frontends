import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addMessage } from "../store/slices/chatSlice";

const ChatInputBox = ({ buttonText, user, sender }) => {
  const [input, setInput] = useState("");
  const dispatch = useDispatch();
  const getCurrentTime = () => {
    const now = new Date();
    const hours = now.getHours().toString().padStart(2, "0"); 
    const minutes = now.getMinutes().toString().padStart(2, "0");
    return `${hours}:${minutes}`;
  };
  const sendMessage = () => {
    if (input.trim() !== "") {
      const newMessage = {
        id: Math.random(),
        user,
        time: getCurrentTime(),
        text: input,
        sender,
      };
      dispatch(addMessage(newMessage));
      setInput("");
    }
  };

  return (
    <div className="flex gap-x-2">
      <input
        name="message"
        type="text"
        value={input}
        required
        placeholder="Enter your message"
        onChange={(e) => setInput(e.target.value)}
        onKeyDown={(e) => e.key === "Enter" && sendMessage()}
        className="flex-1 border p-2  border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 text-sm"
      />
      <button
        type="submit"
        onClick={sendMessage}
        className="flex-none rounded-md bg-indigo-500 cursor-pointer px-3.5 py-2.5 text-sm font-semibold text-white shadow-xs hover:bg-indigo-400 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
      >
        {buttonText}
      </button>
    </div>
  );
};

export default ChatInputBox;
