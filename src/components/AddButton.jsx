import React, { Component } from 'react';

const AddButton = () => (
  <div className="col mb-3">
    <button
      className="btn btn-primary d-block mx-auto ml-sm-auto mr-sm-0"
      type="button"
      data-toggle="modal"
      data-target="#addModal">
      Добавить
    </button>
  </div>
);

export default AddButton;
