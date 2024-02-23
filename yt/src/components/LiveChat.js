import React, { useEffect, useState } from "react";
import { IoSend } from "react-icons/io5";
import ChatMessage from "./ChatMessage";
import { useDispatch, useSelector } from "react-redux";
import { addMessage } from "../utils/chatSlice";
import { generateRandomNames, generateRandomComments } from "../utils/helper";
const LiveChat = () => {
  const dispatch = useDispatch();

  //subscribing to access data in the slice
  const chatMessages = useSelector((store) => store.chat.messages);
  
  const [liveMessage, setliveMessage] = useState("");

  useEffect(() => {
    const timer = setInterval(() => {
      //API polling
      dispatch(
        addMessage({
          name: generateRandomNames(),
          message: generateRandomComments(),
        })
      );
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  function submitHandler() {
    dispatch(addMessage({
      name: "You",
      message: liveMessage
    }))
    setliveMessage("")
  }

  return (
    <div className="flex flex-col items-start gap-0 bg-gray-50 mt-9 rounded-lg  h-[510px] w-[32vw] shadow-gray-100 shadow-lg">
      <div className="p-3 text-xl font-semibold pl-4 mb-2">
        <p>Live Chat</p>
      </div>
      <div className="ml-2 p-4  rounded-md overflow-x-hidden h-[400px] flex gap-3 flex-col-reverse text-sm overflow-scroll">
        {chatMessages.map((c,index) => {
          return <ChatMessage key={index} name={c.name} message={c.message} />;
        })}
      </div>

      <form className="flex justify-between items-center gap-4 py-4 px-4 w-[32vw]" onSubmit={(e) => {
        e.preventDefault()
        submitHandler()
      }}>
        <input
          placeholder="Chat..."
          className=" border w-full outline-none rounded-full p-2 pl-5"
          value={liveMessage}
          onChange={(e) => {
            setliveMessage(e.target.value);
          }}
        ></input>
        <button type="submit">
          <IoSend className="text-2xl text-gray-800" />
        </button>
      </form>
    </div>
  );
};

export default LiveChat;
