import React from 'react';
import { Link } from 'react-router-dom';

const AddButton = () => (
  <div className="col-4 col-sm-3 col-md-2 offset-4 offset-sm-9 mb-3">
    <Link to="/add" className="btn btn-primary btn-block ">
      Добавить
    </Link>
  </div>
);

export default AddButton;
