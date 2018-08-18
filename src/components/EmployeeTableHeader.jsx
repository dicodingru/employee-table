import React, { Component } from 'react';
import cn from 'classnames';

class EmployeeTableHeader extends Component {
  render() {
    const { sortByName, sortByBirthday } = this.props;
    const nameThClass = cn({ 'table-active': sortByName !== '' });
    const birthdayThClass = cn({ 'table-active': sortByBirthday !== '' });
    const nameIconClass = cn({
      fa: true,
      'float-right': true,
      'fa-sort': sortByName === '',
      'fa-sort-desc': sortByName === 'desc',
      'fa-sort-asc': sortByName === 'asc',
    });
    const birthdayIconClass = cn({
      fa: true,
      'float-right': true,
      'fa-sort': sortByBirthday === '',
      'fa-sort-desc': sortByBirthday === 'desc',
      'fa-sort-asc': sortByBirthday === 'asc',
    });
    return (
      <thead>
        <tr>
          <th scope="col" className={nameThClass}>
            Name
            <i className={nameIconClass} aria-hidden="true" />
          </th>
          <th scope="col">Role</th>
          <th scope="col">Phone</th>
          <th scope="col" className={birthdayThClass}>
            Birth date
            <i className={birthdayIconClass} aria-hidden="true" />
          </th>
        </tr>
      </thead>
    );
  }
}

export default EmployeeTableHeader;
