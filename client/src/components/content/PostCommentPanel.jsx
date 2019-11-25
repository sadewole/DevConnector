import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { getSinglePostFeed, deleteComment } from '../../actions/postFeedAction';
import { loadUser } from '../../actions/authAction';
import { connect } from 'react-redux';
import Moment from 'react-moment';

class postCommentPanel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      postId: this.props.id,
      userId: ''
    };
  }
  async componentDidMount() {
    await this.props.loadUser();
    if (this.props.dash.userName.data !== undefined) {
      this.setState({
        userId: this.props.dash.userName.data._id
      });
    }
  }

  handleDelete = id => {
    const { postId } = this.state;
    this.props.deleteComment(postId, id);
  };

  render() {
    const comment =
      this.props.comments !== undefined
        ? this.props.comments.map(i => {
            return (
              <div key={i._id} className='row mt-3 mb-3 border p-2 comment'>
                <div className='text-center col-md-2 col-xs-12 '>
                  <img
                    src='/image/blank-picture.png'
                    alt='imageGravatar'
                    className='img-fluid post-img'
                  />
                  <p className='text-primary lead'>{i.name}</p>
                </div>
                <div className='col-md-10 col-xs-12 '>
                  <p>{i.text}</p>
                </div>
                <div className='comment-date'>
                  Posted on: <Moment format='YYYY/MM/DD'>{i.date}</Moment>
                  {i.user === this.state.userId ? (
                    <button
                      className='btn-danger btn'
                      onClick={() => this.handleDelete(i._id)}
                    >
                      <i className='fas fa-trash-alt' />
                    </button>
                  ) : null}
                </div>
              </div>
            );
          })
        : null;
    return <div className='container-fluid'>{comment}</div>;
  }
}

postCommentPanel.propTypes = {
  getSinglePostFeed: PropTypes.func.isRequired,
  comments: PropTypes.array.isRequired
};

const mapStateToProps = state => {
  return {
    dash: state.dash,
    comments: state.postFeed.allComment
  };
};

export default connect(mapStateToProps, {
  getSinglePostFeed,
  loadUser,
  deleteComment
})(postCommentPanel);
