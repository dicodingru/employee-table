import React, { Component } from 'react';
import { sortBy } from 'lodash';
import EmployeeTableHeader from './EmployeeTableHeader';
import EmployeeTableBody from './EmployeeTableBody';

class EmployeeTable extends Component {
  render() {
    const {
      filterRole,
      filterArchived,
      sortByName,
      sortByBirthday,
      employees,
    } = this.props;
    const filteredEmployees = employees.filter(
      ({ role, isArchive }) =>
        role === filterRole && isArchive === filterArchived
    );
    const sortedEmployees =
      (sortByName && sortBy(filteredEmployees, 'name')) ||
      (sortByBirthday &&
        sortBy(filteredEmployees, (o) => {
          return Date.parse(
            o.birthday
              .split('.')
              .reverse()
              .join('/')
          );
        }));
    const reversedEmployees =
      sortByName === 'desc' || sortByBirthday === 'desc'
        ? sortedEmployees.reverse()
        : sortedEmployees;
    return (
      <table className="table">
        <EmployeeTableHeader
          sortByName={sortByName}
          sortByBirthday={sortByBirthday}
        />
        <EmployeeTableBody employees={reversedEmployees} />
      </table>
    );
  }
}

export default EmployeeTable;
