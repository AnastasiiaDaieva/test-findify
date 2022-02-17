import s from './Breadcrumbs.module.scss';

import { useEffect } from 'react';

import { ReactComponent as BcRemove } from '../../../icons/bc-remove.svg';
import { ReactComponent as BcColor } from '../../../icons/bc-color.svg';

function Breadcrumbs({ filterArray, setFinalFilter }) {
  console.log('bc filters:', filterArray.appliedFilters);
  return (
    <>
      {filterArray.appliedFilters === undefined ? (
        'loading...'
      ) : (
        <ul className={s.Breadcrumbs}>
          {filterArray.appliedFilters.map(({ type, value }) => (
            <li key={value} className={s.Breadcrumbs__unit}>
              <span className={s.Breadcrumbs__value}>
                {type === 'color' ? (
                  <BcColor className={s.Breadcrumbs__icon} />
                ) : (
                  value
                )}
              </span>
              <BcRemove className={s.Breadcrumbs__icon} />
            </li>
          ))}
        </ul>
      )}
    </>
  );
}

export default Breadcrumbs;
