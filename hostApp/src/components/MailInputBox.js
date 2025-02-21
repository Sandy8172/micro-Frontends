import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addEmail } from "../store/slices/mailSlice";

const MailInputBox = () => {
  const dispatch = useDispatch();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [recipient, setRecipient] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const handleSendEmail = (e) => {
    e.preventDefault();
    if (!recipient || !subject || !message) {
      alert("All fields are required!");
      return;
    }

    const newEmail = {
      id: Math.random().toString(36).substr(2, 9), // Unique ID
      recipient,
      sender: "John Doe",
      subject,
      message,
      starred: false,
    };

    dispatch(addEmail(newEmail));
    setIsModalOpen(false);
    setRecipient("");
    setSubject("");
    setMessage("");
  };

  return (
    <>
      <button
        type="button"
        className="bg-blue-300 text-gray-800 p-3 rounded-lg flex gap-x-1 cursor-pointer"
        onClick={() => setIsModalOpen(true)}
      >
        <svg
          className="w-6 h-6 text-gray-800"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          fill="none"
          viewBox="0 0 24 24"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M10.779 17.779 4.36 19.918 6.5 13.5m4.279 4.279 8.364-8.643a3.027 3.027 0 0 0-2.14-5.165 3.03 3.03 0 0 0-2.14.886L6.5 13.5m4.279 4.279L6.499 13.5m2.14 2.14 6.213-6.504M12.75 7.04 17 11.28"
          />
        </svg>
        Compose
      </button>

      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60">
          <div className="relative bg-gray-100 rounded-lg shadow-sm w-full max-w-2xl p-4">
            <div className="flex items-center justify-between border-b pb-3">
              <h3 className="text-xl font-semibold text-gray-900">
                Compose Email
              </h3>
              <button
                type="button"
                className="cursor-pointer text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg p-2"
                onClick={() => setIsModalOpen(false)}
              >
                <svg
                  className="w-4 h-4"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 14 14"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M1 1l6 6m0 0l6 6M7 7l6-6M7 7l-6 6"
                  />
                </svg>
              </button>
            </div>
            <form onSubmit={handleSendEmail}>
              <div className="p-4 space-y-4">
                <input
                  type="email"
                  placeholder="Recipient"
                  className="w-full p-2 border border-gray-300 rounded-md"
                  value={recipient}
                  onChange={(e) => setRecipient(e.target.value)}
                />
                <input
                  type="text"
                  placeholder="Subject"
                  className="w-full p-2 border border-gray-300 rounded-md"
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                />
                <textarea
                  placeholder="Write your message..."
                  className="w-full p-2 border border-gray-300 rounded-md h-40"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                />
              </div>

              <div className="flex justify-end border-t pt-3">
                <button
                  type="submit"
                  className="bg-blue-700 text-white px-4 py-2 rounded-lg hover:bg-blue-800 cursor-pointer"
                >
                  Send
                </button>
                <button
                  type="button"
                  className="ml-3 px-4 py-2 text-gray-700 bg-gray-200 rounded-lg hover:bg-gray-300 cursor-pointer"
                  onClick={() => setIsModalOpen(false)}
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default MailInputBox;
