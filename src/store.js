import { createStore } from 'redux';
import rootReducer from './reducers';
import employees from '../employees.json';

const normalizedEmployees = employees.reduce(
  (acc, employee) => {
    const { id } = employee;
    acc.byId[id] = employee;
    acc.allIds.push(id);
    return acc;
  },
  {
    byId: {},
    allIds: [],
  }
);

const initialState = {
  employees: normalizedEmployees,
  ui: {
    filterRole: 'all',
    filterArchived: false,
    sortByName: 'asc',
    sortByBirthday: '',
  },
};

/* eslint-disable no-underscore-dangle */
const reduxDevtools = window.__REDUX_DEVTOOLS_EXTENSION__;
/* eslint-enable */

const store = createStore(rootReducer, initialState, reduxDevtools && reduxDevtools());

export default store;
