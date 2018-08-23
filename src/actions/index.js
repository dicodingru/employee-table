import { createAction } from 'redux-actions';
import _ from 'lodash';

export const addEmployee = createAction(
  'EMPLOYEE_ADD',
  ({ name, phone, role, birthday }) => {
    const formattedBirthday = String(birthday)
      .split('-')
      .reverse()
      .join('.');
    return {
      employee: {
        id: Number(_.uniqueId(2)),
        name,
        isArchive: false,
        role,
        phone,
        birthday: formattedBirthday,
      },
    };
  }
);

export const updateEmployee = createAction('EMPLOYEE_UPDATE', (employee) => {
  const formattedBirthday = String(employee.birthday)
    .split('-')
    .reverse()
    .join('.');
  return {
    employee: {
      ...employee,
      birthday: formattedBirthday,
    },
  };
});

export const changeRoleFilter = createAction('ROLE_FILTER_CHANGE');
export const changeArchiveFilter = createAction('ARCHIVED_FILTER_CHANGE');
export const switchSortingByName = createAction('SORT_BY_NAME_SWITCH');
export const switchSortingByBirthday = createAction('SORT_BY_BIRTHDAY_SWITCH');
