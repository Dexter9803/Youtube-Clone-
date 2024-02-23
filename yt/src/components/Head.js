import React, { useEffect, useState } from "react";
import { FaUser } from "react-icons/fa";
import { IoIosMenu } from "react-icons/io";
import { CiSearch } from "react-icons/ci";
import { useDispatch, useSelector } from "react-redux";
import { toggleMenu } from "../utils/appSlice";
import { Link, useNavigate } from "react-router-dom";
import { YT_SEARCH_API } from "../utils/constants";
import store from "../utils/store";
import { cacheResults } from "../utils/searchSlice";
import Suggestions from "./Suggestions";

const Head = () => {
  const dispatch = useDispatch();

  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  };

  //input from user in input box
  const [searchQuery, setsearchQuery] = useState("");
  const [suggestions, setsuggestions] = useState([]);
  const [showSuggestions, setshowSuggestions] = useState(false);
  const searchCache = useSelector((store) => store.search);

  useEffect(() => {
    //make api call after every keypress
    //but if difference between keystroke is < 200ms
    //decline api call
    const timer = setTimeout(() => {
      if (searchCache[searchQuery]) {
        setsuggestions(searchCache[searchQuery]);
      } else {
        getSearchSuggestion();
      }
    }, 200);

    return () => {
      clearTimeout(timer);
    };
  }, [searchQuery]);

  const getSearchSuggestion = async () => {
    // console.log(searchQuery);
    const data = await fetch(YT_SEARCH_API + searchQuery);
    const res = await data.json();
    setsuggestions(res[1]);

    //update cache
    dispatch(
      cacheResults({
        [searchQuery]: res[1],
      })
    );
  };

  const navigate = useNavigate();

  return (
    <div className="flex  items-center justify-between px-4 h-16 z-50 sticky top-0 bg-white">
      <div className="flex gap-3 items-center">
        <IoIosMenu
          onClick={() => toggleMenuHandler()}
          className="text-3xl ml-2 cursor-pointer"
        />
        <Link to="/" onClick={() => setsearchQuery("")}>
          <img
            className="h-16"
            alt="yt-logo"
            src="https://www.freeiconspng.com/thumbs/youtube-logo-png/youtube-logo-png-transparent-image-5.png"
          />
        </Link>
      </div>

      <form
        onSubmit={(e) => {
          e.preventDefault();
          navigate("results?search_query=" + searchQuery);
          setshowSuggestions(false);
        }}
        className="flex items-center w-[40%] justify-center"
      >
        <input
          placeholder="Search"
          className="border w-[80%] rounded-l-full p-2 px-5 focus:outline-blue-700"
          type="text"
          value={searchQuery}
          onFocus={() => setshowSuggestions(true)}
          onBlur={() => {
            setTimeout(() => {
              setshowSuggestions(false);
            }, 100);
          }}
          onChange={(e) => {
            setsearchQuery(e.target.value);
          }}
        ></input>
        <button className="border border-l-white h-10 text-2xl p-2 rounded-r-full pr-3 bg-gray-100">
          <CiSearch />
        </button>
      </form>

      {showSuggestions && (
        <div className="fixed top-14 left-[38%] bg-white w-[31%] rounded-2xl shadow-2xl mt-1 z-50 overflow-hidden">
          <ul className="w-full ">
            {suggestions.map((suggestion, index) => {
              
              return (
                <Link
                  onClick={() => setsearchQuery(suggestion)}
                  key={index}
                  to={"results?search_query=" + suggestion}
                >
                  <Suggestions suggestion={suggestion} />
                </Link>
              );
            })}
          </ul>
        </div>
      )}

      <div>
        <FaUser />
      </div>
    </div>
  );
};

export default Head;
