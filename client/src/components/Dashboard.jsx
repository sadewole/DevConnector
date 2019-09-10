import React, { Component } from 'react';
import Title from './content/Title';
import { Link } from 'react-router-dom';
import Experience from './content/ExperiencePanel';
import Education from './content/EducationPanel';
import { loadUser, deleteUser } from '../actions/authAction';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import {
  Modal,
  ModalBody,
  ModalHeader,
  Form,
  FormGroup,
  Input,
  Button
} from 'reactstrap';

class Dashboard extends Component {
  state = {
    userName: '',
    deleteName: '',
    modal: false
  };

  static propTypes = {
    dash: PropTypes.object,
    loadUser: PropTypes.func.isRequired
  };

  async componentDidMount() {
    await this.props.loadUser();
    if (this.props.dash.userName.data !== undefined) {
      this.setState({
        userName: this.props.dash.userName.data.name
      });
    }
  }

  toggle = () => {
    this.setState({
      modal: !this.state.modal
    });
  };

  onChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  deleteAccount = () => {
    const { userName, deleteName } = this.state;
    if (
      this.props.dash.userName.data !== undefined &&
      userName === deleteName
    ) {
      const { _id } = this.props.dash.userName.data;
      this.props.deleteUser(_id);
    }

    this.props.history.push('/');
  };

  render() {
    return (
      <div className='container-fluid mt-5 p-5'>
        {/* Delete account modal */}
        <Modal isOpen={this.state.modal} toggle={this.toggle}>
          <ModalHeader toggle={this.toggle}>Delete Account</ModalHeader>
          <ModalBody>
            <Form onSubmit={this.deleteAccount}>
              <FormGroup>
                <p>
                  Are you sure you want to delete this account? Enter your
                  username to continue the process.
                </p>
                <Input
                  type='text'
                  name='deleteName'
                  placeholder='Enter your username'
                  className='mb-3'
                  onChange={this.onChange}
                />

                <Button
                  color='danger'
                  style={{
                    marginTop: '2rem'
                  }}
                  block
                >
                  I understand that this account would no longer exist
                </Button>
              </FormGroup>
            </Form>
          </ModalBody>
        </Modal>
        {/* End modal */}

        <Title
          title='dashboard'
          icon='fas fa-user-alt fa-2x'
          subtitle={'Welcome ' + this.state.userName}
        />
        <div className='dash-buttons'>
          <Link to='/addProfile' className='button btn-default'>
            <i className='fas fa-user-circle text-primary'></i> Edit Profile
          </Link>
          <Link to='/addExperience' className='button btn-default'>
            <i className='fab fa-black-tie text-primary'></i> Add Experience
          </Link>
          <Link to='addEducation' className='button btn-default'>
            <i className='fas fa-graduation-cap text-primary'></i> Add Education
          </Link>
        </div>
        {/* Experience Credentials */}
        <Experience />
        {/* Education Credentials */}
        <Education />
        <div className='my-2'>
          <button className='button btn-danger' onClick={this.toggle}>
            <i className='fas fa-user-minus'></i> Delete My Account
          </button>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    dash: state.dash
  };
};

export default connect(
  mapStateToProps,
  { loadUser, deleteUser }
)(Dashboard);
