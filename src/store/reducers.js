import { LIKE_VIDEO, DISLIKE_VIDEO } from './actions';

const initialState = {
  videos: [
    { id: 1, title: 'Video 1', url: 'video1.mp4', likes: 0, dislikes: 0 },
    { id: 2, title: 'Video 2', url: '../video/Just a double no biggie.mp4', likes: 0, dislikes: 0 },
    // Add more videos here
  ],
};

const videoReducer = (state = initialState, action) => {
  switch (action.type) {
    case LIKE_VIDEO:
      return {
        ...state,
        videos: state.videos.map(video =>
          video.id === action.payload ? { ...video, likes: video.likes + 1 } : video
        ),
      };
    case DISLIKE_VIDEO:
      return {
        ...state,
        videos: state.videos.map(video =>
          video.id === action.payload ? { ...video, dislikes: video.dislikes + 1 } : video
        ),
      };
    default:
      return state;
  }
};

export default videoReducer;
