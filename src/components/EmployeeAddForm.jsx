import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import * as actionCreators from '../actions';

const mapStateToProps = (state) => {
  const props = {};
  return props;
};

@connect(
  mapStateToProps,
  actionCreators
)
@reduxForm({
  form: 'addEmployee',
})
class EmployeeAddForm extends Component {
  static propTypes = {
    addEmployee: PropTypes.func.isRequired,
    reset: PropTypes.func.isRequired,
    handleSubmit: PropTypes.func.isRequired,
  };

  add = (employee) => {
    const { addEmployee, reset } = this.props;
    addEmployee(employee);
    reset();
  };

  render() {
    const { handleSubmit } = this.props;
    return (
      <div id="addModal" className="modal">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-body">
              <form onSubmit={handleSubmit(this.add)}>
                <div className="form-group">
                  <label htmlFor="name">ФИО</label>
                  <Field
                    id="name"
                    className="form-control"
                    name="name"
                    component="input"
                    type="text"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="phone">Телефон</label>
                  <Field
                    id="phone"
                    className="form-control"
                    name="phone"
                    component="input"
                    type="text"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="role">Должность</label>
                  <Field
                    id="role"
                    className="form-control"
                    name="role"
                    component="select">
                    <option value="">Должность</option>
                    <option value="driver">Водитель</option>
                    <option value="waiter">Официант</option>
                    <option value="cook">Повар</option>
                  </Field>
                </div>
                <div className="form-group">
                  <label htmlFor="">Дата рождения</label>
                  <Field
                    id="birthday"
                    className="form-control"
                    name="birthday"
                    component="input"
                    type="date"
                  />
                </div>
                <div>
                  <button className="btn btn-primary d-block mx-auto" type="submit">
                    Добавить
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default EmployeeAddForm;
