import React from "react";
import { FaCircleUser } from "react-icons/fa6";
import { generateRandomProfile } from "../utils/helper";

const ChatMessage = ({ name, message }) => {
  return (
    <div className="flex items-center gap-2">
      <img src={generateRandomProfile()} className="rounded-[50%] h-7"></img>

      <div>
        <span className="font-semibold text-gray-500">{name}</span>
        <span className="ml-2">{message}</span>
      </div>
    </div>
  );
};

export default ChatMessage;
