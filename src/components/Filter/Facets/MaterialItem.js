import s from './MaterialItem.module.scss';

import { ReactComponent as Checkmark } from '../../../icons/checkmark.svg';

function MaterialItem({ value, count, selected, passSelectedItem }) {
  const handleCheck = () => {
    passSelectedItem(value);
  };

  return (
    <>
      <li className={s.MaterialItem__option}>
        <div
          value={value}
          className={s.MaterialItem__wrapper}
          onClick={handleCheck}
        >
          <input type="radio" className={s.MaterialItem__radio_relative} />
          {selected.includes(value) && (
            <Checkmark className={s.MaterialItem__checkmark} />
          )}
          <span id="materialpicker" className={s.MaterialItem__radio}></span>
          <label htmlFor="materialpicker">{value}</label>
        </div>
        <span className={s.MaterialItem__count}>{`(${count})`}</span>
      </li>
    </>
  );
}

export default MaterialItem;
