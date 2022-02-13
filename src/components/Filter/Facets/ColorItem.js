import s from './ColorItem.module.scss';
import { ReactComponent as Checkmark } from '../../../icons/checkmark.svg';
import { useState } from 'react';

function ColorItem({ name, code, colorArray, colorsMap }) {
  const [checked, setChecked] = useState(false);

  const getCount = (array, name) => {
    const result = array.find(({ value, count }) => name === value);

    if (!result) {
      return 0;
    } else {
      return result.count;
    }
  };

  const handleCheck = () => {
    setChecked(prev => !prev);
  };
  return (
    <>
      {colorsMap === undefined ? (
        'Loading...'
      ) : (
        <li className={s.ColorItem__option}>
          <div className={s.ColorItem__wrapper} onClick={handleCheck}>
            <input
              type="checkbox"
              className={`${s.ColorItem__checkbox}, ${s.ColorItem__checkbox_relative}`}
            />
            {checked && <Checkmark className={s.ColorItem__checkmark} />}
            <span
              id="colorpicker"
              className={s.ColorItem__checkbox}
              style={{
                backgroundColor: code ? code : 'grey',
                backgroundImage: `url(${code})`,
                border: code === '#fff' && '1px solid black',
              }}
            ></span>
            <label htmlFor="colorpicker">{name}</label>
          </div>
          {colorsMap.length > 1 ? (
            <span className={s.ColorItem__count}>
              ({getCount(colorArray, name)})
            </span>
          ) : (
            'Loading...'
          )}
        </li>
      )}
    </>
  );
}

export default ColorItem;
