import { timeAgo } from "../utils/constants";
import { IoMdArrowDropdown } from "react-icons/io";
import { VIDEO_NESTED_COMMENTS } from "../utils/constants";
import { API_KEY } from "../utils/constants";
import { useEffect, useState } from "react";
import ReplyComments from "./ReplyComments";
import { useDispatch, useSelector } from "react-redux";
import { replyToggle } from "../utils/replySlice";


const Comment = ({ comment }) => {
  const title = comment?.snippet?.topLevelComment?.snippet?.authorDisplayName;
  const text = comment?.snippet?.topLevelComment?.snippet?.textOriginal;
  const thumbnail =
    comment?.snippet?.topLevelComment?.snippet?.authorProfileImageUrl;
  const time = comment?.snippet?.topLevelComment?.snippet?.publishedAt;
  const replyCount = comment?.snippet?.totalReplyCount;
  const parentId = comment?.id;
  const publishedTime = timeAgo(time);

  const [nestedComments, setnestedComments] = useState([]);

  const dispatch = useDispatch()

  const showReplies = useSelector((store) => store.reply.showReplies)

  async function getNestedComments() {
    
    const data = await fetch(
      `${VIDEO_NESTED_COMMENTS}${parentId}&key=${API_KEY}`
    );
    const res = await data.json();
    setnestedComments(res.items);
  }

  return (
    <div>
      <div className="flex gap-5 p-3">
        <div>
          <img className="rounded-[50%]" src={thumbnail}></img>
        </div>

        <div className="flex flex-col">
          <div className="flex gap-3 ">
            <p className="font-semibold ">{title}</p>
            <p className="opacity-65">{publishedTime}</p>
          </div>

          <p className="text-sm">{text}</p>

          {!replyCount == 0 && (
            <div className="flex items-center ">
              <IoMdArrowDropdown className="text-2xl pt-1 text-[#065FD4]" />
              <button  onClick={() => {
                if(!showReplies) {
                  getNestedComments()
                  dispatch(replyToggle())
                }
                else {
                  setnestedComments([])
                  dispatch(replyToggle())
                }
              }} className="font-semibold hover:bg-blue-100 py-1 px-4 rounded-full text-[#065FD4] self-start my-2">
                {replyCount} Replies
              </button>
            </div>
          )}
        </div>
      </div>
      {
        nestedComments.map((comment,index) => {
          return <ReplyComments comment={comment}/>
        })
      }
    </div>
  );
};

export default Comment;
