import React, { Component } from 'react';
import { connect } from 'react-redux';

export default OriginalComponent => {
  class MixedComponents extends Component {
    checkAuth = () => {
      if (!this.props.isAuthenticated && !this.props.token) {
        this.props.history.push('/');
      }
    };
    //   checked if auth when mount
    componentDidMount() {
      this.checkAuth();
    }

    // check if auth when updated
    componentDidUpdate() {
      this.checkAuth();
    }
    render() {
      return <OriginalComponent {...this.props} />;
    }
  }

  const mapStateToProps = state => {
    return {
      isAuthenticated: state.auth.isAuthenticated,
      token: state.auth.token
    };
  };
  return connect(mapStateToProps)(MixedComponents);
};
