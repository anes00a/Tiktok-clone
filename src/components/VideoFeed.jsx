import React from 'react';
import { useSelector } from 'react-redux';
import VideoItem from './VideoItem';

const VideoFeed = () => {
  const videos = useSelector((state) => state.videos);

  return (
    <div>
      {videos.map((video) => (
        <VideoItem key={video.id} video={video} />
      ))}
    </div>
  );
};

export default VideoFeed;
