import React from "react";
import {timeAgo} from "../utils/constants"

const ResultVideoCard = ({ info }) => {
  const snippet = info?.snippet;
  const thumbnails = snippet?.thumbnails;
  const title = snippet?.title;
  const channelTitle = snippet?.channelTitle;
  const description = snippet?.description;
  const publishedDate = snippet?.publishedAt;


const timeAgoString = timeAgo(publishedDate);


  return (
    <div className="flex ml-6 mt-6 gap-2 mb-4 ">
      <img src={thumbnails?.medium?.url} className="rounded-lg w-[400px] "></img>
      <div className="flex flex-col mx-2 text-wrap pr-10">
        <p className="font-semibold text-lg">{title}</p>
        <p className="text-sm opacity-70 ">{timeAgoString}</p>
        <p className="opacity-70 font-medium ">{channelTitle}</p>
        <p className="mt-2 text-sm opacity-75">{description}</p>
      </div>
    </div>
  );
};

export default ResultVideoCard;
