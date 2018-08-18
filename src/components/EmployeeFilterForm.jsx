import React, { Component } from 'react';

class EmployeeFilterForm extends Component {
  render() {
    return (
      <div className="mb-3">
        <form className="d-flex justify-content-between" action="">
          <div className="">
            <select className="custom-select">
              <option selected>Выберите должность</option>
              <option value="1">Водитель</option>
              <option value="2">Официант</option>
              <option value="3">Повар</option>
            </select>
          </div>

          <div />

          <div className="form-check form-check-inline">
            <label className="form-check-label" htmlFor="status">
              В архиве &nbsp;
            </label>
            <input
              className="form-check-input"
              type="checkbox"
              value=""
              id="status"
            />
          </div>
        </form>
      </div>
    );
  }
}

export default EmployeeFilterForm;
