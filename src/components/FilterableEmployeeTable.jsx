import React, { Component } from 'react';
import EmployeeFilterForm from './EmployeeFilterForm';
import EmployeeTable from './EmployeeTable';

class FilterableEmployeeTable extends Component {
  state = {
    filterRole: 'cook',
    filterArchived: false,
    sortByName: 'desc',
    sortByBirthday: '',
  };
  render() {
    const { filterRole, filterArchived } = this.state;
    return (
      <div className="p-3">
        <EmployeeFilterForm
          filterRole={filterRole}
          filterArchived={filterArchived}
        />
        <EmployeeTable employees={this.props.employees} {...this.state} />
      </div>
    );
  }
}

export default FilterableEmployeeTable;
