import { connect } from 'react-redux';
import { Feed, FeedProps } from '../components/Feed';
import { getPosts } from '../selectors/posts.selector';
import { AppState } from '../store/AppState';

const mapStateToProps = (state: AppState): FeedProps => ({
  posts: getPosts(state),
});

export const FeedContainer = connect<FeedProps>(mapStateToProps)(Feed);
