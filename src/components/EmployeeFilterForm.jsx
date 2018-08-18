import React, { Component } from 'react';

class EmployeeFilterForm extends Component {
  onSelectRole = (e) => {
    this.props.onChangeRole(e.target.value);
  };
  render() {
    const { filterRole, filterArchived, onChangeStatus } = this.props;
    return (
      <div className="mb-3">
        <form className="d-flex justify-content-between" action="">
          <div className="">
            <select
              className="custom-select"
              value={filterRole}
              onChange={this.onSelectRole}>
              <option value="all">Выберите должность</option>
              <option value="driver">Водитель</option>
              <option value="waiter">Официант</option>
              <option value="cook">Повар</option>
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
              checked={filterArchived}
              id="status"
              onChange={onChangeStatus}
            />
          </div>
        </form>
      </div>
    );
  }
}

export default EmployeeFilterForm;
