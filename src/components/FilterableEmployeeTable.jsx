import React, { Component } from 'react';
import EmployeeFilterForm from './EmployeeFilterForm';
import EmployeeTable from './EmployeeTable';
import EmployeeAddButton from './EmployeeAddButton';
import EmployeeAddForm from './EmployeeAddForm';

class FilterableEmployeeTable extends Component {
  render() {
    return (
      <div className="row">
        <div className="col">
          <div className="row">
            <EmployeeAddButton />
          </div>
          <div className="row">
            <EmployeeFilterForm />
            <EmployeeTable />
          </div>
        </div>
        <EmployeeAddForm />
      </div>
    );
  }
}

export default FilterableEmployeeTable;
