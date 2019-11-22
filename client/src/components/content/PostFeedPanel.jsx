import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { getPostFeed, likes } from '../../actions/postFeedAction';
import { loadUser } from '../../actions/authAction';
import { connect } from 'react-redux';

class PostFeedPanel extends Component {
  state = {
    userId: ''
  };
  async componentDidMount() {
    await this.props.loadUser();
    this.props.getPostFeed();
    if (this.props.dash.userName.data !== undefined) {
      this.setState({
        userId: this.props.dash.userName.data._id
      });
    }
  }

  static propTypes = {
    dash: PropTypes.object,
    getPostFeed: PropTypes.func.isRequired,
    likes: PropTypes.func.isRequired
    // postFeed: PropTypes.array.isRequired
  };

  handleLikes = id => {
    console.log(67);
    this.props.likes(id);
  };

  render() {
    return this.props.postFeed.data !== undefined
      ? this.props.postFeed.data.map(post => {
          return (
            <div key={post._id} className='row mt-3 mb-3 border p-2'>
              <div className='text-center col-md-2 col-xs-12 '>
                <img
                  src='/image/blank-picture.png'
                  alt='imageGravatar'
                  className='img-fluid post-img'
                />
                <p className='text-primary lead'>{post.name}</p>
              </div>
              <div className='col-md-10 col-xs-12 '>
                <p>{post.text}</p>
                <button className='button' onClick={this.handleLikes(post._id)}>
                  <i
                    className='fas fa-heart'
                    style={{
                      color: post.likes.find(
                        like => like.id === this.state.userId
                      )
                        ? 'red'
                        : 'white'
                    }}
                  ></i>
                  <span>{post.likes.length}</span>
                </button>
                <Link to={`/post/${post._id}`} className='button btn-primary'>
                  Discussion
                </Link>
              </div>
            </div>
          );
        })
      : null;
  }
}

const mapStateToProps = state => {
  return {
    dash: state.dash,
    postFeed: state.postFeed.allPost
  };
};

export default connect(mapStateToProps, { getPostFeed, loadUser, likes })(
  PostFeedPanel
);
