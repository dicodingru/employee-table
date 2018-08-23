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
class EditForm extends Component {
  static propTypes = {
    addEmployee: PropTypes.func.isRequired,
    updateEmployee: PropTypes.func.isRequired,
    reset: PropTypes.func.isRequired,
    handleSubmit: PropTypes.func.isRequired,
    employeeId: PropTypes.number,
    employees: PropTypes.object.isRequired,
    initialize: PropTypes.func.isRequired,
    history: PropTypes.object.isRequired,
    action: PropTypes.string.isRequired,
  };

  componentWillMount = () => {
    const { action, employeeId, employees, initialize } = this.props;
    if (action === 'add') return;

    const employee = employees[employeeId];
    const birthday = employee.birthday
      .split('.')
      .reverse()
      .join('-');
    initialize({ ...employee, birthday });
  };

  add = (employee) => {
    const { addEmployee, history } = this.props;
    addEmployee(employee);
    history.push('/');
  };

  update = (employee) => {
    const { employeeId, updateEmployee, history } = this.props;
    updateEmployee({ ...employee, id: Number(employeeId) });
    history.push('/');
  };

  cancel = () => {
    const { history } = this.props;
    history.push('/');
  };

  render() {
    const { handleSubmit, action } = this.props;
    const handler = action === 'add' ? this.add : this.update;
    return (
      <form className="p-3" onSubmit={handleSubmit(handler)}>
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

export default EditForm;
