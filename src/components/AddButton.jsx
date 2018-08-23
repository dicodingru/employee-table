import React from 'react';
import { Link } from 'react-router-dom';

const AddButton = () => (
  <div className="col mb-3">
    <Link to="/add" className="btn btn-primary d-block mx-auto ml-sm-auto mr-sm-0">
      Добавить
    </Link>
  </div>
);

export default AddButton;
