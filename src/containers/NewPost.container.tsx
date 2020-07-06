import { Dispatch } from 'react';
import { connect } from 'react-redux';
import { Action } from 'redux';
import { addPost } from '../actions/posts.action';
import { NewPost, NewPostdProps } from '../components/NewPost';
import { User } from '../models/user.model';
import { getUser } from '../selectors/user.selector';
import { AppState } from '../store/AppState';

interface StateProps {
  user: User;
}

interface DispatchProps {
  onPost: (user: User, text: string) => void;
}

const mapStateToProps = (state: AppState): StateProps => ({
  user: getUser(state),
});

const mapDispatchToProps = (dipatch: Dispatch<Action>): DispatchProps => ({
  onPost: (user: User, text: string) => dipatch(addPost(user, text)),
});

const mergeProps = (stateProps: StateProps, dispatchProps: DispatchProps): NewPostdProps => ({
  photoUrl: stateProps.user.photoUrl,
  onPost: (text: string) => dispatchProps.onPost(stateProps.user, text),
});

export const NewPostContainer = connect(mapStateToProps, mapDispatchToProps, mergeProps)(NewPost);
