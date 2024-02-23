import React, { useEffect, useState } from "react";
import { SEARCH_VIDEO_API } from "../utils/constants";
import ResultVideoCard from "./ResultVideoCard";
import { API_KEY } from "../utils/constants";
import ButtonList from "./ButtonList";
import { Link } from "react-router-dom";
import ChannelCard from "./ChannelCard";
import ShimmerResult from "./ShimmerResult";

const ResultVideoContainer = ({ searchQuery }) => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    getVideos();
  }, [searchQuery]);

  async function getVideos() {
    const data = await fetch(
      SEARCH_VIDEO_API +
        `${searchQuery.get("search_query")}` +
        "&" +
        "key=" +
        `${API_KEY}`
    );
    const res = await data.json();
    setVideos(res?.items);
  }

  if(!videos[0])
  {
    return (
      <div className="flex flex-col gap-5 mt-8 ml-5">
        {Array.from({ length: 10 }, (_, index) => <ShimmerResult key={index} />)}
      </div>
    )
  }

  return (
    <div>
      <ButtonList />
      {videos.map((video, index) => {
        {
          if (video?.id?.kind === "youtube#video")
            return (
              <Link key={index} to={"/watch?v=" + video?.id?.videoId}>
                <ResultVideoCard info={video} />
              </Link>
            );
          else if (video?.id?.kind === "youtube#channel")
            return (
              <div>
                <ChannelCard info={video} />
              </div>
            );
          else if (video?.id?.kind === "youtube#channel")
            return (
              <div>
                <ChannelCard info={video} />
              </div>
            );
        }
      })}
    </div>
  );
};

export default ResultVideoContainer;
