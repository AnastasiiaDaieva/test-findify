import s from './ColorItem.module.scss';

import { ReactComponent as Checkmark } from '../../../../icons/checkmark.svg';

import { useContext, useState } from 'react';
import { UserContext } from 'UserContext';

function ColorItem({ name, code, colorArray, colorsMap }) {
  const [selected, setSelected] = useState(false);
  const context = useContext(UserContext);

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
    const colorObject = { type: 'color', value: code };

    context.setAppliedFilters(prev => {
      const newArray = prev.some(item => colorObject.value === item.value)
        ? [...prev.filter(({ value }) => value !== colorObject.value)]
        : [...prev, colorObject];
      return newArray;
    });
  };

  return (
    <>
      {colorsMap === undefined ? (
        'Loading...'
      ) : (
        <div className={s.ColorItem__option}>
          <div className={s.ColorItem__wrapper} onClick={handleSelect}>
            <input
              type="checkbox"
              className={`${s.ColorItem__checkbox}, ${s.ColorItem__checkbox_relative}`}
            />
            <span
              id="colorpicker"
              className={s.ColorItem__checkbox}
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
                style={{
                  fill: code === '#000000' ? '#ffffff' : 'rgb(0, 0, 0)',
                  color: code === '#000000' ? '#ffffff' : 'rgb(0, 0, 0)',
                }}
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
        </div>
      )}
    </>
  );
}

export default ColorItem;
