import { createStore } from 'redux';
import rootReducer from '../src/reducers';
import {
  addEmployee,
  changeRoleFilter,
  changeArchivedFilter,
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
        filterRole: 'all',
        filterArchived: false,
        sortByName: 'asc',
        sortByBirthday: '',
      },
    });
  });

  test('should add employee', () => {
    store.dispatch(
      addEmployee({
        employee: {
          id: 1,
          name: 'Илья Емельянов',
          isArchive: false,
          role: 'driver',
          phone: '+7 (883) 508-3269',
          birthday: '12.02.1982',
        },
      })
    );
    expect(store.getState().employees).toEqual({
      byId: {
        1: {
          id: 1,
          name: 'Илья Емельянов',
          isArchive: false,
          role: 'driver',
          phone: '+7 (883) 508-3269',
          birthday: '12.02.1982',
        },
      },
      allIds: [1],
    });
  });

  test('should change role filter', () => {
    store.dispatch(changeRoleFilter({ role: 'waiter' }));
    expect(store.getState().ui).toEqual({
      filterRole: 'waiter',
      filterArchived: false,
      sortByName: 'asc',
      sortByBirthday: '',
    });
  });

  test('should change archived filter', () => {
    store.dispatch(changeArchivedFilter());
    expect(store.getState().ui).toEqual({
      filterRole: 'waiter',
      filterArchived: true,
      sortByName: 'asc',
      sortByBirthday: '',
    });
  });

  test('should change sorting by name order', () => {
    store.dispatch(switchSortingByName());
    expect(store.getState().ui).toEqual({
      filterRole: 'waiter',
      filterArchived: true,
      sortByName: 'desc',
      sortByBirthday: '',
    });
  });

  test('should change sorting by birthday order', () => {
    store.dispatch(switchSortingByBirthday());
    store.dispatch(switchSortingByBirthday());
    expect(store.getState().ui).toEqual({
      filterRole: 'waiter',
      filterArchived: true,
      sortByName: '',
      sortByBirthday: 'desc',
    });
  });
});
