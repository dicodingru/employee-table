import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actionCreators from '../actions';

const mapStateToProps = (state) => {
  const props = {
    filterRole: state.ui.filterRole,
    filterArchived: state.ui.filterArchived,
  };
  return props;
};
@connect(
  mapStateToProps,
  actionCreators
)
class EmployeeFilterForm extends Component {
  onSelectRole = ({ target: { value } }) => {
    this.props.changeRoleFilter({ role: value });
  };

  onChangeStatus = () => {
    this.props.changeArchivedFilter();
  };

  render() {
    const { filterRole, filterArchived } = this.props;
    return (
      <div className="mb-3">
        <form className="d-flex justify-content-between" action="">
          <div>
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

          <div className="form-check form-check-inline">
            <label className="form-check-label" htmlFor="status">
              В архиве &nbsp;
            </label>
            <input
              className="form-check-input"
              type="checkbox"
              checked={filterArchived}
              id="status"
              onChange={this.onChangeStatus}
            />
          </div>
        </form>
      </div>
    );
  }
}

export default EmployeeFilterForm;
