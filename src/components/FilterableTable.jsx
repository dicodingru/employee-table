import React from 'react';
import FilterForm from './FilterForm';
import Table from './Table';
import AddButton from './AddButton';

const FilterableTable = () => (
  <div className="row">
    <div className="col">
      <div className="row">
        <AddButton />
      </div>
      <div className="row">
        <FilterForm />
        <Table />
      </div>
    </div>
  </div>
);

export default FilterableTable;
