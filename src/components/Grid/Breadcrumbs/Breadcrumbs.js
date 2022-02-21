import s from './Breadcrumbs.module.scss';

import { useContext } from 'react';
import { ReactComponent as BcRemove } from '../../../icons/bc-remove.svg';
import { ReactComponent as BcColor } from '../../../icons/bc-color.svg';
import { ReactComponent as BcStrike } from '../../../icons/bc-strike.svg';
import { UserContext } from 'UserContext';

function Breadcrumbs({ filterArray }) {
  const context = useContext(UserContext);

  const removeFilter = value => {
    const applied = context.appliedFilters;
    const idx = applied.findIndex(object => object.value === value);
    context.setAppliedFilters(prev => prev.filter((_, index) => index !== idx));
  };

  return (
    <>
      {filterArray.appliedFilters === undefined ? (
        'loading...'
      ) : (
        <ul className={s.Breadcrumbs}>
          {filterArray.appliedFilters.map(({ type, value }) => (
            <li
              key={value}
              className={s.Breadcrumbs__unit}
              onClick={() => removeFilter(value)}
            >
              <span className={s.Breadcrumbs__value}>
                {type === 'color' ? (
                  <BcColor
                    style={{ fill: value.includes('#') ? value : '#C2C2C2' }}
                  />
                ) : (
                  value
                )}
              </span>
              <BcRemove className={s.Breadcrumbs__icon} />
              <BcStrike
                className={s.Breadcrumbs__icon_strike}
                style={{ display: 'none' }}
              />
            </li>
          ))}
        </ul>
      )}
    </>
  );
}

export default Breadcrumbs;
