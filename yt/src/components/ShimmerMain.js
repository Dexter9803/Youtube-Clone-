import React from 'react'
import { ShimmerSimpleGallery } from "react-shimmer-effects";

const ShimmerMain = () => {
    return (
        <div>
          <ShimmerSimpleGallery card imageHeight={160} col={4} caption />
        </div>
      );
}

export default ShimmerMain