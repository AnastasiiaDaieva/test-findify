import s from './Breadcrumbs.module.scss';

import { ReactComponent as BcRemove } from '../../../icons/bc-remove.svg';
import { ReactComponent as BcColor } from '../../../icons/bc-color.svg';
import { ReactComponent as BcStrike } from '../../../icons/bc-strike.svg';

function Breadcrumbs({ filterArray, setFunc }) {
  const removeFilter = value => {
    const applied = filterArray;
    console.log(applied);
    const idx = applied.findIndex(object => object.value === value);
    setFunc(prev => prev.filter((_, index) => index !== idx));
  };

  return (
    <>
      {filterArray === undefined ? (
        'loading...'
      ) : (
        <ul className={s.Breadcrumbs}>
          {filterArray.map(({ type, value }) => (
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
