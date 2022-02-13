import s from './MaterialItem.module.scss';
import { ReactComponent as Checkmark } from '../../../icons/checkmark.svg';
import { useState } from 'react';

function MaterialItem({ value, count }) {
  const [checked, setChecked] = useState(false);

  const handleCheck = () => {
    setChecked(prev => !prev);
  };
  return (
    <li className={s.MaterialItem__option}>
      <div className={s.MaterialItem__wrapper} onClick={handleCheck}>
        <input type="checkbox" className={s.MaterialItem__checkbox_relative} />
        {checked && <Checkmark className={s.MaterialItem__checkmark} />}
        <span id="materialpicker" className={s.MaterialItem__checkbox}></span>
        <label htmlFor="materialpicker">{value}</label>
      </div>
      <span className={s.MaterialItem__count}>{`(${count})`}</span>
    </li>
  );
}

export default MaterialItem;
