import s from './Breadcrumbs.module.scss';

import { useEffect } from 'react';

import { ReactComponent as BcRemove } from '../../../icons/bc-remove.svg';
import { ReactComponent as BcColor } from '../../../icons/bc-color.svg';

function Breadcrumbs({ appliedFilters, setFinalFilter }) {
  // an unfinished attempt to handle breadcrumbs
  useEffect(() => {
    console.log(appliedFilters);
  }, [appliedFilters]);

  return (
    <>
      {appliedFilters ? (
        <ul className={s.Breadcrumbs}>
          {appliedFilters.map(({ type, value }) => (
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
      ) : (
        'loading...'
      )}
    </>
  );
}

export default Breadcrumbs;
