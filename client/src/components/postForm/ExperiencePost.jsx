import React, { Component } from 'react';
import Title from '../content/Title';
import { Link } from 'react-router-dom';
import { validateInputName } from '../auth/validator';
import {
  Form,
  Input,
  Label,
  FormGroup,
  Modal,
  Button,
  ModalBody
} from 'reactstrap';
import { connect } from 'react-redux';
import { postExperience } from '../../actions/experienceAction';
import PropTypes from 'prop-types';

class ExperiencePost extends Component {
  state = {
    job: '',
    company: '',
    location: '',
    startDate: '',
    endDate: '',
    description: '',
    isCurrent: false,
    error: {},
    modal: false
  };

  // Props
  static propTypes = {
    postExperience: PropTypes.func.isRequired,
    exper: PropTypes.object.isRequired
  };

  // toggle for modal
  toggleModal = () => {
    this.setState({
      modal: !this.state.modal
    });
  };

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

  // handle input error controller
  handleAllError = e => {
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

  handleJobError = e => this.handleAllError(e);

  handleCompanyError = e => this.handleAllError(e);

  handleLocationError = e => this.handleAllError(e);

  handleStartDateError = e => this.handleAllError(e);

  handleEndDateError = e => this.handleAllError(e);

  handleDescriptionError = e => this.handleAllError(e);
  // end

  // change state event handler
  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  // handle form submission
  handleSubmit = e => {
    e.preventDefault();

    let {
      job,
      company,
      location,
      startDate,
      endDate,
      isCurrent,
      description
    } = this.state;

    if (validateInputName(job)) {
      // handle validity
      this.setState({
        error: {
          job: true
        }
      });
      return;
    }

    if (validateInputName(company)) {
      // handle validity
      this.setState({
        error: {
          company: true
        }
      });
      return;
    }
    if (validateInputName(location)) {
      // handle validity
      this.setState({
        error: {
          location: true
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
      let data = {
        job,
        company,
        location,
        startDate,
        currentDate,
        description
      };

      this.props.postExperience(data);
    } else {
      let data = { job, company, location, startDate, endDate, description };

      this.props.postExperience(data);
    }

    this.toggleModal();
  };

  render() {
    return (
      <div className='container-fluid mt-5 p-5'>
        {/* success modal */}
        <Modal isOpen={this.state.modal} toggle={this.toggleModal}>
          <ModalBody>
            <h3 className=''>{this.props.exper.msg}</h3>
            <Link to='/dashboard'>
              <Button color='danger' className='float-right'>
                OK
              </Button>
            </Link>
          </ModalBody>
        </Modal>
        {/* modal end */}
        <Title
          title='Add an experience'
          icon='fas fa-code-branch fa-2x'
          subtitle='Add any developer / programing positions that you have had in the past'
        />
        <small className='muted'>*=required fields</small>

        <section className='my-4'>
          <Form onSubmit={this.handleSubmit}>
            <Input
              type='text'
              placeholder='* Job Title'
              name='job'
              className='mb-2'
              onChange={e => {
                this.handleChange(e);
                this.handleJobError(e);
              }}
              style={{ borderColor: this.state.error['job'] ? 'red' : '' }}
            />
            <small className='text-danger mb-4'>
              <p>{this.state.error['job'] ? 'Field must not be empty' : ''}</p>
            </small>
            <Input
              type='text'
              placeholder='* Company'
              name='company'
              className='mb-2'
              onChange={e => {
                this.handleChange(e);
                this.handleCompanyError(e);
              }}
              style={{ borderColor: this.state.error['company'] ? 'red' : '' }}
            />
            <small className='text-danger mb-4'>
              <p>
                {this.state.error['company'] ? 'Field must not be empty' : ''}
              </p>
            </small>
            <Input
              type='text'
              placeholder='Location'
              name='location'
              className='mb-2'
              onChange={e => {
                this.handleChange(e);
                this.handleLocationError(e);
              }}
              style={{ borderColor: this.state.error['location'] ? 'red' : '' }}
            />
            <small className='text-danger mb-4'>
              <p>
                {this.state.error['location'] ? 'Field must not be empty' : ''}
              </p>
            </small>
            <FormGroup>
              <Label>From Date</Label>
              <Input
                type='date'
                className='mb-2'
                name='startDate'
                onChange={e => {
                  this.handleChange(e);
                  this.handleStartDateError(e);
                }}
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
              <Label>To Date</Label>
              <Input
                type='date'
                className='mb-4'
                name='endDate'
                onChange={e => {
                  this.handleChange(e);
                  this.handleEndDateError(e);
                }}
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
            {/* disable enddate if current job */}
            <FormGroup>
              <Label check>
                {' '}
                <input
                  type='checkbox'
                  name='current'
                  value='current'
                  onChange={this.toggleCurrent}
                />
                Current Job
              </Label>
              <small className='text-danger mb-4'>
                <p>
                  {this.state.error['currentDate']
                    ? 'Please, click if this your current job'
                    : ''}
                </p>
              </small>
            </FormGroup>
            <Input
              type='textarea'
              className='my-4'
              placeholder='Job Description'
              name='description'
              onChange={e => {
                this.handleChange(e);
                this.handleDescriptionError(e);
              }}
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
    exper: state.experience
  };
};

export default connect(
  mapStateToProps,
  { postExperience }
)(ExperiencePost);
