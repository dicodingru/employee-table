import { createSelector } from 'reselect';

const getEmployees = ({ employees }) => employees;
const getRoleFilter = ({ ui: { roleFilter } }) => roleFilter;
const getArchiveFilter = ({ ui: { archiveFilter } }) => archiveFilter;

const employeesSelector = createSelector(getEmployees, (employees) =>
  employees.allIds.map((id) => employees.byId[id])
);

export const filteredEmployeesSelector = createSelector(
  getRoleFilter,
  getArchiveFilter,
  employeesSelector,
  (roleFilter, archiveFilter, employees) =>
    employees.filter(
      ({ role, isArchive }) =>
        isArchive === archiveFilter && (roleFilter === 'all' || role === roleFilter)
    )
);

export default { filteredEmployeesSelector };
