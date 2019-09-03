import React, { Component } from 'react';
import { Table } from 'reactstrap';

export default class EducationPanel extends Component {
  state = {
    userEduDetails: [
      {
        school: 'University of washington',
        degree: 'masters',
        startYear: 'sep 1993',
        endYear: 'june 1999'
      }
    ]
  };

  deleteEduDetails = () => {
    console.log('Delete Education details');
  };

  render() {
    const eduDetails = this.state.userEduDetails.map((i, k) => {
      return (
        <tr key={k} className='text-capitalize'>
          <td>{i.school}</td>
          <td className='sm-hidden'>{i.degree}</td>
          <td className='sm-hidden'>
            {i.startYear} - {i.endYear}
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
