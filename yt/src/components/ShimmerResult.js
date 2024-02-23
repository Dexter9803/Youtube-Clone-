import React from "react";
import { ShimmerContentBlock } from "react-shimmer-effects";

const ShimmerResult = () => {
  return (
    <div className="w-[80vw]">
        <ShimmerContentBlock
      title
      text
      cta
      thumbnailWidth={450}
      thumbnailHeight={370}
    />
    </div>
  );
};

export default ShimmerResult;
