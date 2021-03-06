import React, { Component } from 'react';
import {
  Form,
  Input,
  FormGroup,
  Label,
  Modal,
  Button,
  ModalBody
} from 'reactstrap';
import { Link } from 'react-router-dom';
import Title from '../content/Title';
import { validateInputName } from '../auth/validator';
import { postEducation } from '../../actions/educationAction';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class EducationPost extends Component {
  state = {
    school: '',
    degree: '',
    study: '',
    startDate: '',
    endDate: '',
    isCurrent: false,
    description: '',
    error: {},
    modal: false
  };

  // Props
  static propTypes = {
    postEducation: PropTypes.func.isRequired,
    educ: PropTypes.object.isRequired
  };

  // toggle for modal
  toggleModal = () => {
    this.setState({
      modal: !this.state.modal
    });
  };

  // check for current date
  toggleCurrent = () => {
    if (this.state.isCurrent === true) {
      this.setState({
        endDate: ''
      });
    }

    this.setState({
      isCurrent: !this.state.isCurrent
    });
  };

  // handle state with input
  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });

    // Handle input error
    if (e.target.value.length > 0) {
      this.setState({
        error: {
          [e.target.name]: false
        }
      });
    } else {
      this.setState({
        error: {
          [e.target.name]: true
        }
      });
    }
  };

  // handle form submission
  handleSubmit = e => {
    e.preventDefault();

    let {
      school,
      degree,
      study,
      startDate,
      endDate,
      isCurrent,
      description
    } = this.state;

    if (validateInputName(school)) {
      // handle validity
      this.setState({
        error: {
          school: true
        }
      });
      return;
    }

    if (validateInputName(degree)) {
      // handle validity
      this.setState({
        error: {
          degree: true
        }
      });
      return;
    }
    if (validateInputName(study)) {
      // handle validity
      this.setState({
        error: {
          study: true
        }
      });
      return;
    }
    if (validateInputName(startDate)) {
      // handle validity
      this.setState({
        error: {
          startDate: true
        }
      });
      return;
    }
    if (validateInputName(description)) {
      // handle validity
      this.setState({
        error: {
          description: true
        }
      });
      return;
    }

    if (isCurrent === false && endDate === '') {
      // handle validity
      this.setState({
        error: {
          currentDate: true
        }
      });
      return;
    }
    if (endDate !== '' && endDate < startDate) {
      // handle validity
      this.setState({
        error: {
          endDate: true
        }
      });
      return;
    }

    if (isCurrent === true && endDate === '') {
      let currentDate = 'Current';
      let data = { school, degree, study, startDate, currentDate, description };

      this.props.postEducation(data);
    } else {
      let data = { school, degree, study, startDate, endDate, description };

      this.props.postEducation(data);
    }

    this.toggleModal();
  };

  render() {
    return (
      <div className='container-fluid mt-5 p-5'>
        {/* success modal */}
        <Modal isOpen={this.state.modal} toggle={this.toggleModal}>
          <ModalBody>
            <h3 className=''>{this.props.educ.msg}</h3>
            <Link to='/dashboard'>
              <Button color='danger' className='float-right'>
                OK
              </Button>
            </Link>
          </ModalBody>
        </Modal>
        {/* modal end */}
        <Title
          title='Add Your Education'
          icon='fas fa-graduation-cap'
          subtitle='Add any school, bootcamp, etc that you have attended'
        />

        <small className='muted'>*=required fields</small>

        <section className='my-4'>
          <Form onSubmit={this.handleSubmit}>
            <Input
              type='text'
              className='mb-2'
              placeholder='* School or Bootcamp'
              name='school'
              onChange={this.handleChange}
              style={{ borderColor: this.state.error['school'] ? 'red' : '' }}
            />
            <small className='text-danger mb-4'>
              <p>
                {this.state.error['school'] ? 'Field must not be empty' : ''}
              </p>
            </small>
            <Input
              type='text'
              placeholder='* Degree or Certificate'
              className='mb-2'
              name='degree'
              onChange={this.handleChange}
              style={{ borderColor: this.state.error['degree'] ? 'red' : '' }}
            />
            <small className='text-danger mb-4'>
              <p>
                {this.state.error['degree'] ? 'Field must not be empty' : ''}
              </p>
            </small>
            <Input
              type='text'
              name='study'
              className='mb-2'
              placeholder='* Field Of Study'
              onChange={this.handleChange}
              style={{ borderColor: this.state.error['study'] ? 'red' : '' }}
            />
            <small className='text-danger mb-4'>
              <p>
                {this.state.error['study'] ? 'Field must not be empty' : ''}
              </p>
            </small>
            <FormGroup>
              <Label for='startDate'>* From Date</Label>
              <Input
                type='date'
                name='startDate'
                className='mb-2'
                onChange={this.handleChange}
                style={{
                  borderColor: this.state.error['startDate'] ? 'red' : ''
                }}
              />
              <small className='text-danger mb-4'>
                <p>
                  {this.state.error['startDate']
                    ? 'Field must not be empty'
                    : ''}
                </p>
              </small>
            </FormGroup>
            <FormGroup className={this.state.isCurrent ? 'hide' : 'show'}>
              <Label for='endDate'>To Date</Label>
              <Input
                type='date'
                name='endDate'
                className='mb-2'
                onChange={this.handleChange}
                style={{
                  borderColor: this.state.error['endDate'] ? 'red' : ''
                }}
              />
              <small className='text-danger mb-4'>
                <p>
                  {this.state.error['endDate'] ? "Date doesn't collerate" : ''}
                </p>
              </small>
            </FormGroup>
            <FormGroup>
              <input
                type='checkbox'
                name='current'
                value='current'
                onChange={this.toggleCurrent}
              />
              Current School
              <small className='text-danger mb-4'>
                <p>
                  {this.state.error['currentDate']
                    ? 'Please, click if this your current school'
                    : ''}
                </p>
              </small>
            </FormGroup>

            <Input
              type='textarea'
              className='my-4'
              placeholder='* Program Description'
              name='description'
              onChange={this.handleChange}
              style={{
                borderColor: this.state.error['description'] ? 'red' : ''
              }}
            />
            <small className='text-danger mb-4'>
              <p>
                {this.state.error['description']
                  ? 'Field must not be empty'
                  : ''}
              </p>
            </small>

            <FormGroup className='my-4'>
              <button className='button btn-primary'>Submit</button>
              <Link to='/dashboard'>
                <button className='button btn-default'>Go Back</button>
              </Link>
            </FormGroup>
          </Form>
        </section>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    educ: state.education
  };
};

export default connect(
  mapStateToProps,
  { postEducation }
)(EducationPost);
