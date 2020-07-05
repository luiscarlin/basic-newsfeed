import { v4 as uuidv4 } from 'uuid';
import { Post } from '../models/post.model';
import { User } from '../models/user.model';

export interface AppState {
  user: User;
  posts: Post[];
}

export const DEFAULT_APP_STATE: AppState = {
  user: {
    id: '1',
    photoUrl: 'https://www.stevensegallery.com/300/300',
    name: 'Steven Seagal',
    location: 'OH, USA',
    role: 'Software Developer',
  },
  posts: [
    {
      id: uuidv4(),
      photoUrl: 'https://www.placecage.com/300/300',
      name: 'Nicholas Cage',
      location: 'CA, USA',
      minutesAgo: 5,
      postMessage: 'Testing the posts / comments',
      numberLikes: 5,
      numberComments: 0,
      comments: [],
    },
    {
      id: uuidv4(),
      photoUrl: 'https://www.fillmurray.com/300/300',
      name: 'Bill Murray',
      location: 'AZ, USA',
      minutesAgo: 10,
      postMessage: 'Hello World!',
      numberLikes: 2,
      numberComments: 1,
      comments: [
        {
          id: uuidv4(),
          photoUrl: 'https://www.placecage.com/300/300',
          minutesAgo: 2,
          name: 'Nicholas Cage',
          role: 'Actor',
          message: 'Hello back!',
          numberLikes: 4,
        },
      ],
    },
  ],
};
