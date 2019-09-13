import React, { Component } from 'react';
import { Table } from 'reactstrap';
import { connect } from 'react-redux';
import {
  getSingleUserExp,
  deleteExperience
} from '../../actions/experienceAction';
import { loadUser } from '../../actions/authAction';
import PropTypes from 'prop-types';

class ExperiencePanel extends Component {
  static propTypes = {
    exper: PropTypes.object.isRequired,
    getSingleUserExp: PropTypes.func.isRequired,
    loadUser: PropTypes.func.isRequired,
    user: PropTypes.object,
    deleteExperience: PropTypes.func.isRequired
  };

  async componentDidMount() {
    await this.props.loadUser();
    if (this.props.user && this.props.user !== null) {
      await this.props.getSingleUserExp(this.props.user.data._id);
    }
  }

  deleteExpDetails = id => {
    this.props.deleteExperience(id);
  };

  render() {
    const expDetails = this.props.exper.exp.map(i => {
      return (
        <tr key={i._id} className='text-capitaiize'>
          <td>{i.company}</td>
          <td className='sm-hidden'>{i.job}</td>
          <td className='sm-hidden'>
            {new Date(i.startDate).toDateString().slice(4, 15)} -{' '}
            {i.endDate
              ? new Date(i.endDate).toDateString().slice(4, 15)
              : i.currentDate}
          </td>
          <td>
            <button
              className='button btn-danger'
              onClick={() => this.deleteExpDetails(i._id)}
            >
              Delete
            </button>
          </td>
        </tr>
      );
    });

    return (
      <div className='mt-4'>
        <h2>Experience Credentials</h2>

        <Table striped borderless>
          <thead>
            <tr className='bg-secondary text-white'>
              <th>Company</th>
              <th className='sm-hidden'>Title</th>
              <th className='sm-hidden'>Years</th>
              <th></th>
            </tr>
          </thead>
          <tbody>{expDetails}</tbody>
        </Table>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    user: state.auth.user,
    exper: state.experience
  };
};

export default connect(
  mapStateToProps,
  { getSingleUserExp, deleteExperience, loadUser }
)(ExperiencePanel);
