import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import * as actionCreators from '../actions';

@connect(
  (state) => ({
    employees: state.employees.byId,
  }),
  actionCreators
)
@reduxForm({
  form: 'updateEmployee',
})
@withRouter
class EmployeeEditForm extends Component {
  static propTypes = {
    updateEmployee: PropTypes.func.isRequired,
    reset: PropTypes.func.isRequired,
    handleSubmit: PropTypes.func.isRequired,
  };

  componentWillMount = () => {
    const { employeeId, employees, initialize } = this.props;
    const employee = employees[employeeId];
    const birthday = employee.birthday
      .split('.')
      .reverse()
      .join('-');
    initialize({ ...employee, birthday });
  };

  update = (employee) => {
    const { updateEmployee, history } = this.props;
    updateEmployee(employee);
    history.push('/');
  };

  cancel = (employee) => {
    const { history } = this.props;
    history.push('/');
  };

  render() {
    const { handleSubmit } = this.props;
    return (
      <form className="p-3" onSubmit={handleSubmit(this.update)}>
        <div className="form-group row">
          <label className="col-sm-2 col-from-label" htmlFor="id">
            ID
          </label>
          <Field
            id="id"
            className="form-control col-sm-10"
            name="id"
            component="input"
            type="text"
            disabled={true}
          />
        </div>
        <div className="form-group row">
          <label className="col-sm-2 col-from-label" htmlFor="name">
            ФИО
          </label>
          <Field
            id="name"
            className="form-control col-sm-10"
            name="name"
            component="input"
            type="text"
          />
        </div>
        <div className="form-group row">
          <label className="col-sm-2 col-from-label" htmlFor="phone">
            Телефон
          </label>
          <Field
            id="phone"
            className="form-control col-sm-10"
            name="phone"
            component="input"
            type="text"
          />
        </div>
        <div className="form-group row">
          <label className="col-sm-2 col-from-label" htmlFor="role">
            Должность
          </label>
          <Field
            id="role"
            className="form-control col-sm-10"
            name="role"
            component="select">
            <option value="">---</option>
            <option value="driver">Водитель</option>
            <option value="waiter">Официант</option>
            <option value="cook">Повар</option>
          </Field>
        </div>
        <div className="form-group row">
          <label className="col-sm-2 col-from-label" htmlFor="birthday">
            Дата рождения
          </label>
          <Field
            id="birthday"
            className="form-control col-sm-10"
            name="birthday"
            component="input"
            type="date"
          />
        </div>
        <div className="form-group row">
          <div className="mx-auto form-check">
            <Field
              id="isArchive"
              className="form-check-input"
              name="isArchive"
              component="input"
              type="checkbox"
            />
            <label className="form-check-label" htmlFor="isArchive">
              В архиве
            </label>
          </div>
        </div>
        <div>
          <button className="btn btn-outline-success btn-block" type="submit">
            Сохранить
          </button>
          <button
            className="btn btn-outline-danger btn-block"
            type="button"
            onClick={this.cancel}>
            Отмена
          </button>
        </div>
      </form>
    );
  }
}

export default EmployeeEditForm;
