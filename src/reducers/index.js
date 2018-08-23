import { combineReducers } from 'redux';
import { handleActions } from 'redux-actions';
import { reducer as formReducer } from 'redux-form';
import _ from 'lodash';
import * as actions from '../actions';

const roleFilter = handleActions(
  {
    [actions.changeRoleFilter](
      state,
      {
        payload: { role },
      }
    ) {
      return role;
    },
  },
  'all'
);

const archiveFilter = handleActions(
  {
    [actions.changeArchiveFilter](state) {
      return !state;
    },
  },
  false
);

const sortByName = handleActions(
  {
    [actions.switchSortingByName](state) {
      if (state === '') return 'asc';
      return state === 'asc' ? 'desc' : 'asc';
    },
    [actions.switchSortingByBirthday]() {
      return '';
    },
  },
  'asc'
);

const sortByBirthday = handleActions(
  {
    [actions.switchSortingByBirthday](state) {
      if (state === '') return 'asc';
      return state === 'asc' ? 'desc' : 'asc';
    },
    [actions.switchSortingByName]() {
      return '';
    },
  },
  ''
);

const byId = handleActions(
  {
    [actions.addEmployee](
      state,
      {
        payload: { employee },
      }
    ) {
      return { ...state, [employee.id]: employee };
    },
    [actions.updateEmployee](
      state,
      {
        payload: { employee },
      }
    ) {
      return { ...state, [employee.id]: employee };
    },
  },
  {}
);

const allIds = handleActions(
  {
    [actions.addEmployee](
      state,
      {
        payload: { employee },
      }
    ) {
      return [...state, employee.id];
    },
  },
  []
);

const employees = combineReducers({ byId, allIds });

const ui = combineReducers({
  roleFilter,
  archiveFilter,
  sortByName,
  sortByBirthday,
});

const rootReducer = combineReducers({
  form: formReducer,
  employees,
  ui,
});

export default rootReducer;
