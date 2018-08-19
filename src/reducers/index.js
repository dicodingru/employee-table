import { combineReducers } from 'redux';
import { handleActions } from 'redux-actions';
import * as actions from '../actions';

const filterRole = handleActions(
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

const filterArchived = handleActions(
  {
    [actions.changeArchivedFilter](state) {
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
  filterRole,
  filterArchived,
  sortByName,
  sortByBirthday,
});

const rootReducer = combineReducers({
  employees,
  ui,
});

export default rootReducer;
