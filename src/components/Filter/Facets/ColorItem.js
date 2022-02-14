import s from './ColorItem.module.scss';

import { ReactComponent as Checkmark } from '../../../icons/checkmark.svg';

import { useState } from 'react';

function ColorItem({ name, code, colorArray, colorsMap }) {
  const [selected, setSelected] = useState(false);

  const getCount = (array, name) => {
    const result = array.find(({ value, count }) => name === value);

    if (!result) {
      return 0;
    } else {
      return result.count;
    }
  };

  const handleSelect = () => {
    setSelected(prev => !prev);
  };

  return (
    <>
      {colorsMap === undefined ? (
        'Loading...'
      ) : (
        <li className={s.ColorItem__option}>
          <div className={s.ColorItem__wrapper} onClick={handleSelect}>
            <input
              type="radio"
              className={`${s.ColorItem__radio}, ${s.ColorItem__radio_relative}`}
            />
            <span
              id="colorpicker"
              className={s.ColorItem__radio}
              style={{
                backgroundColor: code ? code : 'grey',
                backgroundImage: `url(${code})`,
                border: code === '#fff' && '1px solid black',
              }}
            ></span>
            {selected && (
              <Checkmark
                className={s.ColorItem__checkmark}
                width="12px"
                height="12px"
                style={{ color: code === '#000000' ? '#fff' : '#000' }}
              />
            )}
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
