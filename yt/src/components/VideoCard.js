import React from "react";
import { formatLargeNumber } from "../utils/constants";

const VideoCard = ({ info }) => {
  
  const snippet = info?.snippet;
  const statistics = info?.statistics;
  const channelTitle = snippet?.channelTitle;
  const title = snippet?.title;
  const thumbnails = snippet?.thumbnails;

  const abc = title.substr(0,60)+"...";

  


  return (
    <div className=" w-[275px] rounded-lg ml-4 mt-6  cursor-pointer z-10 text-sm">
      <img className="rounded-md w-full" src={thumbnails?.medium?.url} alt="thumbnail" />
      <ul className="mt-[2px] p-2 pr-0 leading-5 pb-4">
        <li className="font-semibold">{abc}</li>
        <li className="text-black opacity-60 ">{channelTitle}</li>
        <li className=" text-black opacity-90">{formatLargeNumber(statistics?.viewCount)+" views"}</li>
      </ul>
    </div>
  );
};

export default VideoCard;
