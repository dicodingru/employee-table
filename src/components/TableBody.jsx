import React from 'react';
import PropTypes from 'prop-types';
import Row from './Row';

const TableBody = ({ employees }) => (
  <tbody>
    {employees.map((e) => (
      <Row key={e.id} employee={e} />
    ))}
  </tbody>
);

TableBody.propTypes = {
  employees: PropTypes.array.isRequired,
};

export default TableBody;
