import { Action } from 'redux';

export const LIKE_COMMENT = 'COMMENT@LIKE';

interface LikeCommentAction extends Action {
  type: typeof LIKE_COMMENT;
  payload: {
    postId: string;
    commentId: string;
  };
}

export const likeComment = (postId: string, commentId: string): LikeCommentAction => {
  return {
    type: LIKE_COMMENT,
    payload: { postId, commentId },
  };
};
