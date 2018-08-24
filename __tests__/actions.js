import { createStore } from 'redux';
import rootReducer from '../src/reducers';
import {
  addEmployee,
  updateEmployee,
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
        birthday: '12.02.1982',
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

  test('should update employee', () => {
    store.dispatch(
      updateEmployee({
        employee: {
          id: 21,
          name: 'Илья Баранов',
          isArchive: true,
          role: 'waiter',
          phone: '+7 (883) 508-3270',
          birthday: '12.02.1983',
        },
      })
    );
    expect(store.getState().employees).toEqual({
      byId: {
        21: {
          id: 21,
          name: 'Илья Баранов',
          isArchive: true,
          role: 'waiter',
          phone: '+7 (883) 508-3270',
          birthday: '12.02.1983',
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
