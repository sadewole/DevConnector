import React, { Component } from 'react';
import { Table } from 'reactstrap';
import { connect } from 'react-redux';
import {
  getSingleUserEdu,
  deleteEducation
} from '../../actions/educationAction';
import { loadUser } from '../../actions/authAction';
import PropTypes from 'prop-types';

class EducationPanel extends Component {
  static propTypes = {
    educ: PropTypes.object.isRequired,
    getSingleUserEdu: PropTypes.func.isRequired,
    loadUser: PropTypes.func.isRequired,
    user: PropTypes.object,
    deleteEducation: PropTypes.func.isRequired
  };

  async componentDidMount() {
    await this.props.loadUser();
    if (this.props.user && this.props.user !== null) {
      await this.props.getSingleUserEdu(this.props.user.data._id);
    }
  }

  deleteEduDetails = id => {
    this.props.deleteEducation(id);
  };

  render() {
    const eduDetails = this.props.educ.edu.map(i => {
      return (
        <tr key={i._id} className='text-capitalize'>
          <td>{i.school}</td>
          <td className='sm-hidden'>{i.degree}</td>
          <td className='sm-hidden'>
            {new Date(i.startDate).toDateString().slice(4, 15)} -{' '}
            {i.endDate
              ? new Date(i.endDate).toDateString().slice(4, 15)
              : i.currentDate}
          </td>
          <td>
            <button
              className='button btn-danger'
              onClick={() => this.deleteEduDetails(i._id)}
            >
              Delete
            </button>
          </td>
        </tr>
      );
    });
    return (
      <div className='mt-4'>
        <h2>Education Credentials</h2>

        <Table striped borderless>
          <thead>
            <tr className='bg-secondary text-white'>
              <th>School</th>
              <th className='sm-hidden'>Degree</th>
              <th className='sm-hidden'>Years</th>
              <th></th>
            </tr>
          </thead>
          <tbody>{eduDetails}</tbody>
        </Table>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    user: state.auth.user,
    educ: state.education
  };
};

export default connect(
  mapStateToProps,
  { getSingleUserEdu, loadUser, deleteEducation }
)(EducationPanel);
