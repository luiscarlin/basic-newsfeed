import { Dispatch } from 'react';
import { connect } from 'react-redux';
import { Action } from 'redux';
import { deleteComment, editComment, likeComment } from '../actions/comment.action';
import { likePost } from '../actions/posts.action';
import { Post, PostDispatchProps, PostStateProps } from '../components/Post';
import { getPostById } from '../selectors/posts.selector';
import { AppState } from '../store/AppState';

const mapStateToProps = (state: AppState, ownProps: { id: string }): PostStateProps => {
  const post = getPostById(state, ownProps.id);
  return { ...post };
};

const mapDispatchToProps = (dispatch: Dispatch<Action>, ownProps: { id: string }): PostDispatchProps => ({
  onPostLike: () => dispatch(likePost(ownProps.id)),
  onCommentLike: (commentId) => dispatch(likeComment(ownProps.id, commentId)),
  onCommentDelete: (commentId) => dispatch(deleteComment(ownProps.id, commentId)),
  onCommentEdit: (commentId, comment) => dispatch(editComment(ownProps.id, commentId, comment)),
});

export const PostContainer = connect(mapStateToProps, mapDispatchToProps)(Post);
