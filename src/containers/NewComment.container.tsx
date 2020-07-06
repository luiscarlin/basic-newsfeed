import { Dispatch } from 'react';
import { connect } from 'react-redux';
import { Action } from 'redux';
import { addComment } from '../actions/comment.action';
import { NewComment, NewCommentProps } from '../components/NewComment';
import { User } from '../models/user.model';
import { getUser } from '../selectors/user.selector';
import { AppState } from '../store/AppState';

interface StateProps {
  user: User;
}

interface DispatchProps {
  onNewComment: (user: User, comment: string) => void;
}

const mapStateToProps = (state: AppState): StateProps => ({
  user: getUser(state),
});

const mapDispatchToProps = (
  dipatch: Dispatch<Action>,
  ownProps: { postId: string; onCommentEntered: () => void },
): DispatchProps => ({
  onNewComment: (user: User, comment: string) => {
    dipatch(addComment(user, ownProps.postId, comment));
    ownProps.onCommentEntered();
  },
});

const mergeProps = (stateProps: StateProps, dispatchProps: DispatchProps): NewCommentProps => ({
  photoUrl: stateProps.user.photoUrl,
  onNewComment: (comment: string) => dispatchProps.onNewComment(stateProps.user, comment),
});

export const NewCommentContainer = connect(mapStateToProps, mapDispatchToProps, mergeProps)(NewComment);
