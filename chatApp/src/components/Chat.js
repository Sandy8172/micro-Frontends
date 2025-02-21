import React from "react";
import "../index.css";
import { useSelector } from "react-redux";
import { selectedMessages } from "host/chatSlice";
import ChatInputBox from "host/inputChatBox";

const Chat = () => {
  const messages = useSelector(selectedMessages);

  return (
    <div className="max-w-5xl mx-auto bg-white rounded-2xl mb-1 p-4 h-fit ">
      <div className="overflow-y-auto mb-1 h-[70vh] px-2 space-y-4">
        {messages.map((msg) => (
          <div
            key={msg.id}
            className={`flex ${
              msg.sender === "me" ? "justify-end" : "justify-start"
            } items-start gap-2.5`}
          >
            {msg.sender !== "me" && (
              <p className="w-8 h-8 rounded-full bg-gray-400 text-center">O</p>
            )}
            <div
              className={`flex flex-col w-full max-w-[320px] p-4 rounded-xl ${
                msg.sender === "me" ? "bg-green-200" : "bg-gray-200"
              }`}
            >
              <div className="flex items-center space-x-2">
                <span className="text-sm font-semibold text-gray-900">
                  {msg.user}
                </span>
                <span className="text-sm text-gray-500">{msg.time}</span>
              </div>
              <p className="text-sm py-2.5 text-gray-900">{msg.text}</p>
            </div>
            {msg.sender === "me" && (
              <p className="w-8 h-8 rounded-full bg-gray-400 text-center">U</p>
            )}
          </div>
        ))}
      </div>
      <ChatInputBox buttonText={"Send"} user={"You"} sender={"me"} />
    </div>
  );
};

export default Chat;
