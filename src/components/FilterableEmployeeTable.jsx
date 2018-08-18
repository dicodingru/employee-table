import React, { Component } from 'react';
import EmployeeFilterForm from './EmployeeFilterForm';
import EmployeeTable from './EmployeeTable';

class FilterableEmployeeTable extends Component {
  state = {
    filterRole: 'all',
    filterArchived: false,
    sortByName: 'asc',
    sortByBirthday: '',
  };

  handleFilterByRole = (role) => {
    this.setState({
      filterRole: role,
    });
  };

  handleFilterByStatus = () => {
    this.setState((prevState) => ({
      filterArchived: !prevState.filterArchived,
    }));
  };

  handleSortByName = () => {
    this.setState((prevState) => {
      const sortByName = prevState.sortByName === 'asc' ? 'desc' : 'asc';
      return { sortByName, sortByBirthday: '' };
    });
  };

  handleSortByBirthday = () => {
    this.setState((prevState) => {
      const sortByBirthday =
        prevState.sortByBirthday === 'asc' ? 'desc' : 'asc';
      return { sortByBirthday, sortByName: '' };
    });
  };

  render() {
    const { filterRole, filterArchived } = this.state;
    return (
      <div className="p-3">
        <EmployeeFilterForm
          filterRole={filterRole}
          filterArchived={filterArchived}
          onChangeRole={this.handleFilterByRole}
          onChangeStatus={this.handleFilterByStatus}
        />
        <EmployeeTable
          employees={this.props.employees}
          {...this.state}
          onSortByName={this.handleSortByName}
          onSortByBirthday={this.handleSortByBirthday}
        />
      </div>
    );
  }
}

export default FilterableEmployeeTable;
