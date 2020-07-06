import { Dispatch } from 'react';
import { connect } from 'react-redux';
import { Action } from 'redux';
import { likeComment } from '../actions/comment.action';
import { addPostLike } from '../actions/posts.action';
import { Card, CardDispatchProps, CardStateProps } from '../components/Card';
import { getPost } from '../selectors/posts.selector';
import { AppState } from '../store/AppState';

const mapStateToProps = (state: AppState, ownProps: { id: string }): CardStateProps => {
  const post = getPost(state, ownProps.id);
  return { ...post };
};

const mapDispatchToProps = (dispatch: Dispatch<Action>, ownProps: { id: string }): CardDispatchProps => ({
  onPostLike: () => dispatch(addPostLike(ownProps.id)),
  onCommentLike: (commentId) => dispatch(likeComment(ownProps.id, commentId)),
});

export const CardContainer = connect(mapStateToProps, mapDispatchToProps)(Card);
