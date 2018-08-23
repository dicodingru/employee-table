import React, { Component } from 'react';
import PropTypes from 'prop-types';
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
  static propTypes = {
    switchSortingByName: PropTypes.func.isRequired,
    switchSortingByBirthday: PropTypes.func.isRequired,
    sortByName: PropTypes.string.isRequired,
    sortByBirthday: PropTypes.string.isRequired,
    employees: PropTypes.array.isRequired,
  };

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
      <div className="col-12 col-sm-9 col-md-10">
        <div className="table-responsive">
          <table className="table table-striped">
            <EmployeeTableHeader
              sortByName={sortByName}
              sortByBirthday={sortByBirthday}
              onSortByName={this.onSortByName}
              onSortByBirthday={this.onSortByBirthday}
            />
            <EmployeeTableBody employees={reversedEmployees} />
          </table>
        </div>
      </div>
    );
  }
}

export default EmployeeTable;
