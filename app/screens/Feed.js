import React, { Component } from 'react';
import {connect} from "react-redux";
import {fetchFeed} from '../thunks';
import FeedCard from "../components/feedCard";
import {
  Text,
  View,
  ScrollView,
  FlatList
} from 'react-native';
import { users } from '../config/data';

class FeedScreenElements extends Component {
  componentDidMount() {
      this.props.onMountDispatch();
  }

  onCommentClick = (index) => {
    this.props.navigation.navigate('Comments', {index});
  };

  render() {
    const {feed: {posts: {results}}} = this.props;
    return (
            results.length > 0 ?
              <FlatList
                data={results}
                renderItem={({item, index}) => {
                  return <FeedCard
                    card={item}
                    onCommentClick={() => this.onCommentClick(index)}
                    onLikeClick={() => console.log("like clicked")}
                    onShareClick={() => console.log("share clicked")}
                  />
      }}
      keyExtractor={(card, index) => index}
    />
            : null
      );
  }
}

const mapStateToProps = (state, ownProps) => {
    return {
        feed: state.feed
    }
};

const mapDispatchToProps = (dispatch) => ({
    onMountDispatch: () => {
        dispatch(fetchFeed({}));
    },
}) ;


const Feed = connect(mapStateToProps, mapDispatchToProps)(FeedScreenElements);

export default Feed;
