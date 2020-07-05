import { Dispatch } from 'react';
import { connect } from 'react-redux';
import { Action } from 'redux';
import { addNewPost } from '../actions/posts.action';
import { NewPostCard, NewPostCardProps } from '../components/NewPostCard';
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
  onPost: (user: User, text: string) => dipatch(addNewPost(user, text)),
});

const mergeProps = (stateProps: StateProps, dispatchProps: DispatchProps): NewPostCardProps => ({
  photoUrl: stateProps.user.photoUrl,
  onPost: (text: string) => dispatchProps.onPost(stateProps.user, text),
});

export const NewPostCardContainer = connect(mapStateToProps, mapDispatchToProps, mergeProps)(NewPostCard);
