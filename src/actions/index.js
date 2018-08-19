import { createAction } from 'redux-actions';

export const addEmployee = createAction('EMPLOYEE_ADD');
export const changeRoleFilter = createAction('ROLE_FILTER_CHANGE');
export const changeArchivedFilter = createAction('ARCHIVED_FILTER_CHANGE');
export const switchSortingByName = createAction('SORT_BY_NAME_SWITCH');
export const switchSortingByBirthday = createAction('SORT_BY_BIRTHDAY_SWITCH');
