import React from 'react'

const ChannelCard = ({info}) => {

    const title = info?.snippet?.title;
    const thumbnail = info?.snippet?.thumbnails?.medium?.url;
    const description = info?.snippet?.description;

  return (
    <div className='flex items-start gap-10  px-32 mt-10 mx-7'>
        <div className='pl-20s w-[400px]'>
            <img className='rounded-[50%] w-40' src={thumbnail}></img>
        </div>
        <div className='mt-4 '>
            <p className='text-lg font-semibold'>{title}</p>
            <p className='text-sm opacity-80'>{description}</p>
        </div>
        <button className='py-2 px-5 bg-black text-white rounded-full font-semibold text-[14px] mt-10'>Subscribe</button>
    </div>
  )
}

export default ChannelCard