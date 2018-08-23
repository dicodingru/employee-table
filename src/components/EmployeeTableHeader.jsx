import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

const EmployeeTableHeader = ({
  sortByName,
  sortByBirthday,
  onSortByName,
  onSortByBirthday,
}) => {
  const nameThClass = cn({ 'bg-dark text-light': sortByName !== '' });
  const birthdayThClass = cn({ 'bg-dark text-light': sortByBirthday !== '' });

  const nameIconClass = cn({
    fa: true,
    'float-right': true,
    'fa-sort': sortByName === '',
    'fa-sort-desc': sortByName === 'desc',
    'fa-sort-asc': sortByName === 'asc',
  });

  const birthdayIconClass = cn({
    fa: true,
    'float-right': true,
    'fa-sort': sortByBirthday === '',
    'fa-sort-desc': sortByBirthday === 'desc',
    'fa-sort-asc': sortByBirthday === 'asc',
  });

  return (
    <thead className="">
      <tr>
        <th scope="col" className={nameThClass} onClick={onSortByName}>
          ФИО
          <i className={nameIconClass} aria-hidden="true" />
        </th>
        <th scope="col">Должность</th>
        <th scope="col">Телефон</th>
        <th scope="col" className={birthdayThClass} onClick={onSortByBirthday}>
          Дата рождения
          <i className={birthdayIconClass} aria-hidden="true" />
        </th>
      </tr>
    </thead>
  );
};

EmployeeTableHeader.propTypes = {
  sortByName: PropTypes.string.isRequired,
  sortByBirthday: PropTypes.string.isRequired,
  onSortByName: PropTypes.func.isRequired,
  onSortByBirthday: PropTypes.func.isRequired,
};

export default EmployeeTableHeader;
