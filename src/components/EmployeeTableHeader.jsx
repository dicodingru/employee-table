import React, { Component } from 'react';

class EmployeeTableHeader extends Component {
  render() {
    return (
      <thead>
        <tr>
          <th scope="col">
            Name
            <i className="fa fa-sort float-right" aria-hidden="true" />
          </th>
          <th scope="col">Role</th>
          <th scope="col">Phone</th>
          <th scope="col">
            Birth date
            <i className="fa fa-sort float-right" aria-hidden="true" />
          </th>
        </tr>
      </thead>
    );
  }
}

export default EmployeeTableHeader;
