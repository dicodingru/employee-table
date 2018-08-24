import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import * as actionCreators from '../actions';

const validate = (values) => {
  const errors = {};
  if (!values.name) {
    errors.name = 'Нужно заполнить';
  } else if (values.name.length < 4) {
    errors.name = 'Минимум 4 символа';
  } else if (!/\D+/i.test(values.name)) {
    errors.name = 'Только буквы';
  }
  if (!values.phone) {
    errors.phone = 'Нужно заполнить';
  } else if (!/(^$)|(^\+?(\s|\d|\(|\)|-)+$)/i.test(values.phone)) {
    errors.phone = 'Номер заполнен некорректно';
  }
  if (!values.birthday) {
    errors.birthday = 'Нужно заполнить';
  } else if (
    !/^(?:(?:31(\.|-|\.)(?:0?[13578]|1[02]))\1|(?:(?:29|30)(\.|-|\.)(?:0?[1,3-9]|1[0-2])\2))(?:(?:1[6-9]|[2-9]\d)?\d{2})$|^(?:29(\.|-|\.)0?2\3(?:(?:(?:1[6-9]|[2-9]\d)?(?:0[48]|[2468][048]|[13579][26])|(?:(?:16|[2468][048]|[3579][26])00))))$|^(?:0?[1-9]|1\d|2[0-8])(\.|-|\.)(?:(?:0?[1-9])|(?:1[0-2]))\4(?:(?:1[6-9]|[2-9]\d)?\d{2})$/i.test(
      values.birthday
    )
  ) {
    errors.birthday = 'Дата заполнена некорректно';
  }
  return errors;
};

const renderField = ({
  id,
  className,
  input,
  label,
  placeholder,
  type,
  meta: { touched, error, warning },
}) => (
  <div
    className="form-group form-row align-items-center mb-4"
    style={{ position: 'relative' }}>
    <label className="col col-sm-3 col-from-label text-right pr-2" htmlFor={id}>
      {label}
    </label>
    <input className={className} {...input} placeholder={placeholder} type={type} />
    <div style={{ position: 'absolute', bottom: '-1.6em', right: '0' }}>
      {touched &&
        ((error && <span className="text-danger">{error}</span>) ||
          (warning && <span>{warning}</span>))}
    </div>
  </div>
);

const renderLabel = (id, title) => {
  return (
    <label className="col col-sm-3 col-from-label text-right pr-2" htmlFor={id}>
      {title}
    </label>
  );
};

@connect(
  (state) => ({
    employees: state.employees.byId,
  }),
  actionCreators
)
@reduxForm({
  form: 'editEmployee',
  validate,
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
    initialize(employee);
  };

  add = (employee) => {
    const { addEmployee, history } = this.props;
    addEmployee(employee);
    history.push('/');
  };

  update = (employee) => {
    const { employeeId, updateEmployee, history } = this.props;
    updateEmployee({ employee: { ...employee, id: Number(employeeId) } });
    history.push('/');
  };

  cancel = () => {
    const { history } = this.props;
    history.push('/');
  };

  renderTextInput = (name, label, placeholder) => (
    <Field
      id={name}
      className="form-control col-sm-9"
      name={name}
      component={renderField}
      type="text"
      label={label}
      placeholder={placeholder}
    />
  );

  renderButtons = () => (
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
  );

  render() {
    const { handleSubmit, action } = this.props;
    const handler = action === 'add' ? this.add : this.update;
    return (
      <div className="row">
        <form
          className="p-3 col mx-auto"
          onSubmit={handleSubmit(handler)}
          style={{ maxWidth: '500px' }}>
          {this.renderTextInput('name', 'ФИО:', 'Фамилия Имя (Отчество)')}
          {this.renderTextInput('phone', 'Телефон:', '+7 (981) 981-8181')}
          <div className="form-group form-row align-items-center">
            {renderLabel('role', 'Должность:')}
            <Field
              id="role"
              className="form-control col-sm-9"
              name="role"
              component="select">
              <option value="">---</option>
              <option value="driver">Водитель</option>
              <option value="waiter">Официант</option>
              <option value="cook">Повар</option>
            </Field>
          </div>
          {this.renderTextInput('birthday', 'Дата рождения:', '31.12.1999')}
          <div className="form-group form-row align-items-center">
            <div className="mx-auto form-check form-check-inline">
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
          {this.renderButtons()}
        </form>
      </div>
    );
  }
}

export default EditForm;
