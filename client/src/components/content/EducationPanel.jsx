import React, { Component } from 'react';
import { Table } from 'reactstrap';
import { connect } from 'react-redux';
import { getSingleUserEdu } from '../../actions/educationAction';
import { loadUser } from '../../actions/authAction';
import PropTypes from 'prop-types';

class EducationPanel extends Component {
  state = {
    userEduDetails: [],
    msg: ''
  };

  static propTypes = {
    edu: PropTypes.object.isRequired,
    getSingleUserEdu: PropTypes.func.isRequired,
    loadUser: PropTypes.func.isRequired,
    user: PropTypes.object
  };

  async componentDidMount() {
    await this.props.loadUser();
    if (this.props.user && this.props.user !== null) {
      await this.props.getSingleUserEdu(this.props.user.data._id);
    }
    if (this.props.edu.count > 0) {
      this.setState({
        userEduDetails: this.props.edu.data
      });
    } else {
      await this.setState({
        msg: this.props.edu.msg
      });
    }
  }

  deleteEduDetails = () => {
    console.log('Delete Education details');
  };

  render() {
    const eduDetails = this.state.userEduDetails.map(i => {
      return (
        <tr key={i._id} className='text-capitalize'>
          <td>{i.school}</td>
          <td className='sm-hidden'>{i.degree}</td>
          <td className='sm-hidden'>
            {i.startDate} - {i.endDate ? i.endDate : i.currentDate}
          </td>
          <td>
            <button
              className='button btn-danger'
              onClick={this.deleteEduDetails}
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
    edu: state.education.edu
  };
};

export default connect(
  mapStateToProps,
  { getSingleUserEdu, loadUser }
)(EducationPanel);
