import React, { Component } from 'react';
import { sortBy } from 'lodash';
import { connect } from 'react-redux';
import * as actionCreators from '../actions';
import EmployeeTableHeader from './EmployeeTableHeader';
import EmployeeTableBody from './EmployeeTableBody';
import { filteredEmployeesSelector } from '../selectors';

const mapStateToProps = (state) => {
  const props = {
    employees: filteredEmployeesSelector(state),
    sortByName: state.ui.sortByName,
    sortByBirthday: state.ui.sortByBirthday,
  };
  return props;
};

@connect(
  mapStateToProps,
  actionCreators
)
class EmployeeTable extends Component {
  onSortByName = () => {
    this.props.switchSortingByName();
  };

  onSortByBirthday = () => {
    this.props.switchSortingByBirthday();
  };

  render() {
    const { sortByName, sortByBirthday, employees } = this.props;

    const sortedEmployees =
      (sortByName && sortBy(employees, 'name')) ||
      (sortByBirthday &&
        sortBy(employees, (o) => {
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
          onSortByName={this.onSortByName}
          onSortByBirthday={this.onSortByBirthday}
        />
        <EmployeeTableBody employees={reversedEmployees} />
      </table>
    );
  }
}

export default EmployeeTable;
