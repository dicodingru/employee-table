import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import * as actionCreators from '../actions';

const mapStateToProps = (state) => {
  const props = {
    roleFilter: state.ui.roleFilter,
    archiveFilter: state.ui.archiveFilter,
  };
  return props;
};
@connect(
  mapStateToProps,
  actionCreators
)
class FilterForm extends Component {
  static propTypes = {
    roleFilter: PropTypes.string.isRequired,
    archiveFilter: PropTypes.bool.isRequired,
    changeRoleFilter: PropTypes.func.isRequired,
    changeArchiveFilter: PropTypes.func.isRequired,
  };

  onSelectRole = ({ target: { value } }) => {
    this.props.changeRoleFilter({ role: value });
  };

  onChangeStatus = () => {
    this.props.changeArchiveFilter();
  };

  renderRoleFilter = () => {
    const { roleFilter } = this.props;
    return (
      <div className="col-6 col-sm mb-sm-3 text-sm-right">
        <label htmlFor="role" className="sr-only">
          Фильтровать по должности:{' '}
        </label>
        <select
          id="role"
          className="form-control mw-100"
          value={roleFilter}
          onChange={this.onSelectRole}>
          <option value="all">Должность</option>
          <option value="driver">Водитель</option>
          <option value="waiter">Официант</option>
          <option value="cook">Повар</option>
        </select>
      </div>
    );
  };

  renderArchiveFilter = () => {
    const { archiveFilter } = this.props;
    return (
      <div className="col-6 col-sm">
        <div className="form-check d-block text-right">
          <label className="d-inline-block" htmlFor="status">
            <input
              id="status"
              className="form-check-input"
              type="checkbox"
              checked={archiveFilter}
              onChange={this.onChangeStatus}
            />
            &nbsp; В архиве
          </label>
        </div>
      </div>
    );
  };

  render() {
    return (
      <div className="col-12 col-sm-3 col-md-2 mb-3">
        <form className="form-inline d-md-block form-row">
          {this.renderRoleFilter()}
          {this.renderArchiveFilter()}
        </form>
      </div>
    );
  }
}

export default FilterForm;
