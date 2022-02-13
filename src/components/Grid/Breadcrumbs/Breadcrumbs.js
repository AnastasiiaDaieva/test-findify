import s from './Breadcrumbs.module.scss';
import { useEffect, useState } from 'react';

function Breadcrumbs({ appliedFilters }) {
  useEffect(() => {
    console.log(appliedFilters);
  }, [appliedFilters]);
  return (
    <>
      {appliedFilters ? (
        <div className={s.Breadcrumbs}>
          {appliedFilters.map(({ type, value }) => (
            <li>
              {type}: {value}
            </li>
          ))}
        </div>
      ) : (
        'loading...'
      )}
    </>
  );
}

export default Breadcrumbs;
