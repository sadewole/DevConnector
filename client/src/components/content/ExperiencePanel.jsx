import React, { Component } from 'react';
import { Table } from 'reactstrap';

export default class ExperiencePanel extends Component {
  state = {
    userExpDetail: [
      {
        company: 'Microsoft',
        title: 'Senior Developer',
        startYear: 'Oct 2011',
        endYear: 'Current'
      },
      {
        company: 'Sun Microsystems',
        title: 'Senior Developer',
        startYear: 'Oct 2004',
        endYear: 'Nov 2010'
      }
    ]
  };

  deleteExpDetails = () => {
    console.log('Delete Experience');
  };

  render() {
    const expDetails = this.state.userExpDetail.map((i, k) => {
      return (
        <tr key={k} className='text-capitaiize'>
          <td>{i.company}</td>
          <td className='sm-hidden'>{i.title}</td>
          <td className='sm-hidden'>
            {i.startYear} - {i.endYear}
          </td>
          <td>
            <button
              className='button btn-danger'
              onClick={this.deleteExpDetails}
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
