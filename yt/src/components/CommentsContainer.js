import React, { useEffect, useState } from "react";
import { VIDEO_MAIN_COMMENTS } from "../utils/constants";
import { API_KEY } from "../utils/constants";
import Comment from "./Comment";



const CommentsContainer = ({videoId}) => {

  const [commentList, setcommentList] = useState([])

  useEffect(() => {
    getComments();
  },[])

  async function getComments() {
    const data = await fetch(`${VIDEO_MAIN_COMMENTS}${videoId.get("v")}&key=${API_KEY}`)
    // console.log(`${VIDEO_MAIN_COMMENTS}+${videoId.get("v")}+key=+${API_KEY}`)
    const res = await data.json()
    setcommentList(res?.items)
  }

  return (
    <div className="mx-5 ml-10 w-[70vw]">
      <p className="text-2xl font-bold mb-5">Comments</p>
      {
        commentList.map((comment,index) => {
          return <Comment key={index} comment={comment}/>
        })
      }
    </div>
  );
}

export default CommentsContainer;
