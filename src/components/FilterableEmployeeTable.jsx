import React, { Component } from 'react';
import EmployeeFilterForm from './EmployeeFilterForm';
import EmployeeTable from './EmployeeTable';

class FilterableEmployeeTable extends Component {
  render() {
    return (
      <div className="p-3">
        <EmployeeFilterForm />
        <EmployeeTable employees={this.props.employees} />
      </div>
    );
  }
}

export default FilterableEmployeeTable;
