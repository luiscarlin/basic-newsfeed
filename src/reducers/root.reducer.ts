import { v4 as uuidv4 } from 'uuid';
import { LIKE_COMMENT } from '../actions/comment.action';
import { ADD_POST_LIKE, CREATE_NEW_POST } from '../actions/posts.action';
import { Post } from '../models/post.model';
import { AppState, DEFAULT_APP_STATE } from '../store/AppState';

export const rootReducer: (state: AppState | undefined, action: any) => AppState = (
  state: AppState = DEFAULT_APP_STATE,
  action: any,
) => {
  switch (action.type) {
    case CREATE_NEW_POST:
      const { photoUrl, name, location } = action.payload.user;
      return {
        ...state,
        posts: [
          ...state.posts,
          {
            id: uuidv4(),
            photoUrl,
            name,
            location,
            minutesAgo: 1,
            postMessage: action.payload.text,
            numberLikes: 0,
            numberComments: 0,
            comments: [],
          } as Post,
        ],
      };
    case ADD_POST_LIKE:
      const { id } = action.payload;

      const posts = state.posts.map((post) => {
        if (post.id !== id) {
          return post;
        }
        post.numberLikes += 1;
        return post;
      });

      return {
        ...state,
        posts,
      };
    case LIKE_COMMENT:
      const { postId, commentId } = action.payload;

      const posts = state.posts.map((post) => {
        if (post.id !== postId) {
          return post;
        }
        post.comments = post.comments.map((comment) => {
          if (comment.id !== commentId) {
            return comment;
          }
          comment.numberLikes += 1;
          return comment;
        });
        return post;
      });

      return {
        ...state,
        posts,
      };
    default:
      return state;
  }
};
