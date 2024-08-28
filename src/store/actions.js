export const LIKE_VIDEO = 'LIKE_VIDEO';
export const DISLIKE_VIDEO = 'DISLIKE_VIDEO';

export const likeVideo = (id) => ({
  type: LIKE_VIDEO,
  payload: id,
});

export const dislikeVideo = (id) => ({
  type: DISLIKE_VIDEO,
  payload: id,
});
