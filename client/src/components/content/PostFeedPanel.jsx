import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import {
  getPostFeed,
  deletePostFeed,
  likes
} from '../../actions/postFeedAction';
import { loadUser } from '../../actions/authAction';
import { connect } from 'react-redux';
import Moment from 'react-moment';

class PostFeedPanel extends Component {
  state = {
    userId: ''
  };
  async componentDidMount() {
    await this.props.loadUser();
    await this.props.getPostFeed();
    if (this.props.dash.userName.data !== undefined) {
      this.setState({
        userId: this.props.dash.userName.data._id
      });
    }
  }

  componentDidUpdate(prevProp, nextProp) {
    // check if there's a change in props(msg)
    const { msg } = this.props;
    if (msg !== prevProp.msg) {
      this.props.getPostFeed();
    }
  }

  static propTypes = {
    dash: PropTypes.object,
    getPostFeed: PropTypes.func.isRequired,
    deletePostFeed: PropTypes.func.isRequired,
    likes: PropTypes.func.isRequired
    // postFeed: PropTypes.array.isRequired
  };

  handleLikes = id => {
    this.props.likes(id);
  };

  handleDelete = id => {
    this.props.deletePostFeed(id);
  };

  render() {
    return this.props.postFeed !== undefined
      ? this.props.postFeed.map(post => {
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
                <p>
                  Posted on: <Moment format='YYYY/MM/DD'>{post.date}</Moment>
                </p>
                <button
                  className='button'
                  onClick={() => this.handleLikes(post._id)}
                >
                  <i
                    className='fas fa-heart'
                    style={{
                      color: post.likes.find(
                        like => like.user === this.state.userId
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
                {post.user === this.state.userId ? (
                  <button
                    className='btn-danger btn'
                    onClick={() => this.handleDelete(post._id)}
                  >
                    <i className='fas fa-trash-alt' />
                  </button>
                ) : null}
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
    postFeed: state.postFeed.allPost,
    msg: state.postFeed.msg
  };
};

export default connect(mapStateToProps, {
  getPostFeed,
  loadUser,
  likes,
  deletePostFeed
})(PostFeedPanel);
