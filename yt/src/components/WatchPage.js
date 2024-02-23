import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { closeMenu } from "../utils/appSlice";
import { useSearchParams } from "react-router-dom";
import CommentsContainer from "./CommentsContainer";
import LiveChat from "./LiveChat";
import { API_KEY, VIDEO_DETS } from "../utils/constants";
import { formatLargeNumber } from "../utils/constants";

const WatchPage = () => {
  const [videoDets, setvideoDets] = useState([]);

  async function getVideoDetails() {
    const data = await fetch(`${VIDEO_DETS}${query}&key=${API_KEY}`);
    const res = await data.json();
    setvideoDets(res.items);
  }

  useEffect(() => {
    getVideoDetails();
  }, []);

  //video details
  const heading = videoDets[0]?.snippet?.title;
  const thumbnail = videoDets[0]?.snippet?.thumbnails?.medium?.url;
  const channelName = videoDets[0]?.snippet?.channelTitle;
  const views = formatLargeNumber(Number(videoDets[0]?.statistics?.viewCount));

  const [searchParams] = useSearchParams();
  const query = searchParams.get("v");

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(closeMenu());
  }, []);

  return (
    <div className="flex flex-col">
      <div className="flex ">
        <div className="m-10 mb-4 rounded-2xl overflow-hidden">
          {
            <iframe
              width="887"
              height="500"
              src={
                "https://www.youtube.com/embed/" +
                searchParams.get("v") +
                "?&autoplay=1"
              }
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
          }
        </div>
        <div>
          <LiveChat />
        </div>
      </div>

      <div className="flex flex-col  px-12 w-[80%] mb-10">
        <div>
          <p className="font-semibold text-xl ">{heading}</p>
          <p className="pt-1 opacity-80">{views} views</p>
        </div>
        <p className="font-bold text-xl ">{channelName}</p>
      </div>
      <CommentsContainer videoId={searchParams} />
    </div>
  );
};

export default WatchPage;
