import s from './MaterialItem.module.scss';

import { ReactComponent as Checkmark } from '../../../../icons/checkmark.svg';
import { useContext, useState } from 'react';
import { UserContext } from 'UserContext';

function MaterialItem({ value, count, onClick }) {
  const [selected, setSelected] = useState(false);

  const context = useContext(UserContext);

  // console.log(selected);
  const handleCheck = () => {
    setSelected(prev => !prev);

    const materialObject = { type: 'text', value: value };
    // console.log('array:', context.appliedFilters);
    onClick(prev => [...prev, materialObject]);

    context.setAppliedFilters(prev => [...prev, materialObject]);
  };

  const onHover = e => {
    e.target.style.border = '1px solid var(--main-color)';
  };
  const offHover = e => {
    e.target.style.border = '1px solid var(--checkbox-color)';
  };

  return (
    <>
      <div className={s.MaterialItem__option}>
        <div
          value={value}
          className={s.MaterialItem__wrapper}
          onClick={handleCheck}
        >
          <input
            type="checkbox"
            className={s.MaterialItem__checkbox_relative}
          />
          {selected && <Checkmark className={s.MaterialItem__checkmark} />}
          <span
            id="materialpicker"
            className={s.MaterialItem__checkbox}
            onMouseEnter={onHover}
            onMouseLeave={offHover}
            style={{
              border: selected
                ? '1px solid var(--main-color)'
                : '1px solid var(--checkbox-color)',
            }}
          ></span>
          <label htmlFor="materialpicker">{value}</label>
        </div>
        <span className={s.MaterialItem__count}>{`(${count})`}</span>
      </div>
    </>
  );
}

export default MaterialItem;
