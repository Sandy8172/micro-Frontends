import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { toggleStar, selectedEmails } from "host/mailSlice";
import "../index.css";
import MailInputBox from "host/inputMailBox";

const EmailPage = () => {
  const dispatch = useDispatch();
  const emails = useSelector(selectedEmails);

  return (
    <div className="h-fit max-h-screen p-2 flex flex-col">
      <h2 className="  mb-4 flex justify-between">
        <p className="text-2xl font-bold">Inbox</p>
        <MailInputBox/>
        
      </h2>
      <div className="flex-1 overflow-y-auto">
        <ul className="bg-white shadow-lg rounded-lg divide-y">
          {emails.map((email) => (
            <li
              key={email.id}
              className="flex items-center justify-between p-4"
            >
              <div>
                <p className="text-gray-800">{email.subject}</p>
                <p className="text-gray-600 text-sm truncate w-64">
                  {email.message}
                </p>
              </div>
              <button
                onClick={() => dispatch(toggleStar(email.id))}
                className={`text-xl cursor-pointer ${
                  email.starred ? "text-yellow-400" : "text-gray-400"
                }`}
              >
                ★
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default EmailPage;
