import React from "react";
import { timeAgo } from "../utils/constants";

const ReplyComments = ({ comment }) => {
  const title = comment?.snippet?.authorDisplayName;
  const text = comment?.snippet?.textOriginal;
  const thumbnail = comment?.snippet?.authorProfileImageUrl;
  const time = comment?.snippet?.publishedAt;
  const publishedTime = timeAgo(time);

  return (
    <div className="ml-20 bg-gray-50 rounded-lg ">
      <div className="flex  gap-5 p-3 pl-10">
        <div>
          <img className="rounded-[50%]" src={thumbnail}></img>
        </div>
        <div className="flex flex-col">
          <div className="flex gap-3 ">
            <p className="font-semibold ">{title}</p>
            <p className="opacity-65">{publishedTime}</p>
          </div>
          <p className="text-sm">{text}</p>
        </div>
      </div>
    </div>
  );
};

export default ReplyComments;
