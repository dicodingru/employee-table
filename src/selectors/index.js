import { createSelector } from 'reselect';

const getEmployees = ({ employees }) => employees;
const getFilterRole = ({ ui: { filterRole } }) => filterRole;
const getFilterArchived = ({ ui: { filterArchived } }) => filterArchived;

const employeesSelector = createSelector(getEmployees, (employees) =>
  employees.allIds.map((id) => employees.byId[id])
);

export const filteredEmployeesSelector = createSelector(
  getFilterRole,
  getFilterArchived,
  employeesSelector,
  (filterRole, filterArchived, employees) =>
    employees.filter(
      ({ role, isArchive }) =>
        isArchive === filterArchived && (filterRole === 'all' || role === filterRole)
    )
);

export default { filteredEmployeesSelector };
