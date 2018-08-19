import React, { Component } from 'react';

class EmployeeAddButton extends Component {
  render() {
    return (
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
  }
}

export default EmployeeAddButton;
