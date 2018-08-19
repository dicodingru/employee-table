import React, { Component } from 'react';
import FilterableEmployeeTable from './FilterableEmployeeTable';

class App extends Component {
  render() {
    return (
      <div className="container-fluid py-3">
        <FilterableEmployeeTable />
      </div>
    );
  }
}

export default App;
