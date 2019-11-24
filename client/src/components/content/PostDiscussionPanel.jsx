import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { getSinglePostFeed } from '../../actions/postFeedAction';
import { connect } from 'react-redux';

class postDiscussionPanel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: this.props.id
    };
  }

  async componentDidMount() {
    if (this.state.id !== null) {
      const { id } = this.state;
      await this.props.getSinglePostFeed(id);
    }
  }

  render() {
    const { post } = this.props;
    return (
      <div className='container-fluid'>
        <div className='row mt-3 mb-3 border p-2'>
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
          </div>
        </div>
      </div>
    );
  }
}

postDiscussionPanel.propTypes = {
  getSinglePostFeed: PropTypes.func.isRequired,
  post: PropTypes.object.isRequired
};

const mapStateToProps = state => {
  return {
    post: state.postFeed.post
  };
};

export default connect(mapStateToProps, { getSinglePostFeed })(
  postDiscussionPanel
);
