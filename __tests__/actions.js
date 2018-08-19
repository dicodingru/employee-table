import { createStore } from 'redux';
import rootReducer from '../src/reducers';
import {
  addEmployee,
  changeRoleFilter,
  changeArchiveFilter,
  switchSortingByName,
  switchSortingByBirthday,
} from '../src/actions';

const store = createStore(rootReducer);

describe('Store', () => {
  test('should match an initial state', () => {
    expect(store.getState()).toEqual({
      employees: {
        byId: {},
        allIds: [],
      },
      ui: {
        roleFilter: 'all',
        archiveFilter: false,
        sortByName: 'asc',
        sortByBirthday: '',
      },
      form: {},
    });
  });

  test('should add employee', () => {
    store.dispatch(
      addEmployee({
        name: 'Илья Емельянов',
        role: 'driver',
        phone: '+7 (883) 508-3269',
        birthday: '1982-02-12',
      })
    );
    expect(store.getState().employees).toEqual({
      byId: {
        21: {
          id: 21,
          name: 'Илья Емельянов',
          isArchive: false,
          role: 'driver',
          phone: '+7 (883) 508-3269',
          birthday: '12.02.1982',
        },
      },
      allIds: [21],
    });
  });

  test('should change role filter', () => {
    store.dispatch(changeRoleFilter({ role: 'waiter' }));
    expect(store.getState().ui).toEqual({
      roleFilter: 'waiter',
      archiveFilter: false,
      sortByName: 'asc',
      sortByBirthday: '',
    });
  });

  test('should change archived filter', () => {
    store.dispatch(changeArchiveFilter());
    expect(store.getState().ui).toEqual({
      roleFilter: 'waiter',
      archiveFilter: true,
      sortByName: 'asc',
      sortByBirthday: '',
    });
  });

  test('should change sorting by name order', () => {
    store.dispatch(switchSortingByName());
    expect(store.getState().ui).toEqual({
      roleFilter: 'waiter',
      archiveFilter: true,
      sortByName: 'desc',
      sortByBirthday: '',
    });
  });

  test('should change sorting by birthday order', () => {
    store.dispatch(switchSortingByBirthday());
    store.dispatch(switchSortingByBirthday());
    expect(store.getState().ui).toEqual({
      roleFilter: 'waiter',
      archiveFilter: true,
      sortByName: '',
      sortByBirthday: 'desc',
    });
  });
});
