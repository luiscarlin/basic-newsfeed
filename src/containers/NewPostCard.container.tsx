import { Dispatch } from 'react';
import { connect, MapDispatchToProps, MapStateToProps, MergeProps } from 'react-redux';
import { Action } from 'redux';
import { addNewPost } from '../actions/posts.action';
import { NewPostCard, NewPostCardProps, NewPostCardStateProps } from '../components/NewPostCard';
import { User } from '../models/user.model';
import { getUser } from '../selectors/user.selector';
import { AppState } from '../store/AppState';

type StateProps = NewPostCardStateProps & { user: User };

type DispatchProps = {
  onPost: (user: User, text: string) => void;
};

const mapStateToProps: MapStateToProps<StateProps, any, AppState> = (state) => ({
  photoUrl: getUser(state).photoUrl,
  user: getUser(state),
});

const mapDispatchToProps: MapDispatchToProps<DispatchProps, any> = (dipatch: Dispatch<Action>) => ({
  onPost: (user: User, text: string) => dipatch(addNewPost(user, text)),
});

const mergeProps: MergeProps<StateProps, DispatchProps, any, NewPostCardProps> = (stateProps, dispatchProps) => ({
  photoUrl: stateProps.photoUrl,
  onPost: (text: string) => dispatchProps.onPost(stateProps.user, text),
});

export const NewPostCardContainer = connect(mapStateToProps, mapDispatchToProps, mergeProps)(NewPostCard);
