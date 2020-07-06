import { AnyAction } from 'redux';
import { v4 as uuidv4 } from 'uuid';
import { ADD_COMMENT, DELETE_COMMENT, EDIT_COMMENT, LIKE_COMMENT } from '../actions/comment.action';
import { ADD_POST, LIKE_POST } from '../actions/posts.action';
import { AppState, DEFAULT_APP_STATE } from '../store/AppState';

export const rootReducer: (state: AppState | undefined, action: AnyAction) => AppState = (
  state: AppState = DEFAULT_APP_STATE,
  action: AnyAction,
) => {
  switch (action.type) {
    case ADD_POST:
      return {
        ...state,
        posts: [
          {
            id: uuidv4(),
            photoUrl: action.payload.user.photoUrl,
            name: action.payload.user.name,
            location: action.payload.user.location,
            minutesAgo: 1,
            postMessage: action.payload.text,
            numberLikes: 0,
            numberComments: 0,
            comments: [],
          },
          ...state.posts,
        ],
      };
    case LIKE_POST:
      return {
        ...state,
        posts: state.posts.map((post) => {
          if (post.id !== action.payload.id) {
            return post;
          }
          post.numberLikes += 1;
          return post;
        }),
      };
    case ADD_COMMENT:
      return {
        ...state,
        posts: state.posts.map((post) => {
          if (post.id !== action.payload.postId) {
            return post;
          }
          post.numberComments += 1;
          post.comments = [
            ...post.comments,
            {
              id: uuidv4(),
              photoUrl: action.payload.user.photoUrl,
              minutesAgo: 1,
              name: action.payload.user.name,
              role: action.payload.user.role,
              message: action.payload.comment,
              numberLikes: 0,
            },
          ];
          return post;
        }),
      };
    case LIKE_COMMENT:
      return {
        ...state,
        posts: state.posts.map((post) => {
          if (post.id !== action.payload.postId) {
            return post;
          }
          post.comments = post.comments.map((comment) => {
            if (comment.id !== action.payload.commentId) {
              return comment;
            }
            comment.numberLikes += 1;
            return comment;
          });
          return post;
        }),
      };
    case DELETE_COMMENT:
      return {
        ...state,
        posts: state.posts.map((post) => {
          if (post.id !== action.payload.postId) {
            return post;
          }
          post.numberComments -= 1;
          post.comments = post.comments.filter((comment) => comment.id !== action.payload.commentId);
          return post;
        }),
      };
    case EDIT_COMMENT:
      return {
        ...state,
        posts: state.posts.map((post) => {
          if (post.id !== action.payload.postId) {
            return post;
          }
          post.comments = post.comments.map((comment) => {
            if (comment.id !== action.payload.commentId) {
              return comment;
            }
            comment.message = action.payload.comment;
            return comment;
          });
          return post;
        }),
      };
    default:
      return state;
  }
};
