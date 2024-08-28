import React from 'react';
import { useDispatch } from 'react-redux';
import { likeVideo, dislikeVideo } from '../store/actions';

const VideoItem = ({ video }) => {
  const dispatch = useDispatch();

  return (
    <div className="video-item">
      <h3>{video.title}</h3>
      <video src={video.url} controls />
      <div>
        <button onClick={() => dispatch(likeVideo(video.id))}>Like</button>
        <button onClick={() => dispatch(dislikeVideo(video.id))}>Dislike</button>
      </div>
      <p>Likes: {video.likes}</p>
      <p>Dislikes: {video.dislikes}</p>
    </div>
  );
};

export default VideoItem;

