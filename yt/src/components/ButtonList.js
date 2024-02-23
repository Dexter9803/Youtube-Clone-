import React, { useState } from "react";
import Button from "./Button";
import { YT_BUTTONS } from "../utils/constants";
import { API_KEY } from "../utils/constants";

const ButtonList = () => {
  
  const [btnList, setbtnList] = useState([])

  useState(() => {
    getBtnList()
  })

  async function getBtnList() {
    const data = await fetch(`${YT_BUTTONS}`+`${API_KEY}`)
    const res = await data.json()
    setbtnList(res?.items)
  }

  return (
    <div className="flex gap-3 m-3  w-[82vw] ">
      {btnList.slice(0,9).map((btn, index) => {
        return <Button key={index} info={btn} />;
      })}
    </div>
  );
};

export default ButtonList;
