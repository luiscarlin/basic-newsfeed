import { v4 as uuidv4 } from 'uuid';
import { CREATE_NEW_POST } from '../actions/posts.action';
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
    default:
      return state;
  }
};
