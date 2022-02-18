import s from './ColorItem.module.scss';

import { ReactComponent as Checkmark } from '../../../../icons/checkmark.svg';

import { useContext, useState } from 'react';
import { UserContext } from 'UserContext';

function ColorItem({ name, code, colorArray, colorsMap }) {
  const [selected, setSelected] = useState(false);
  const context = useContext(UserContext);
  console.log(context);

  const getCount = (array, name) => {
    const result = array.find(({ value, count }) => name === value);
    console.log(code);
    if (!result) {
      return 0;
    } else {
      return result.count;
    }
  };

  //  const hardCodeBreadcrumbs = [
  //    { type: 'text', value: 'Amethyst' },
  //    { type: 'color', value: '#fff' },
  //    { type: 'range', value: '1-500' },
  //  ];

  const checkObjects = (array, type, code) => {
    const findType = array.some(object => object.type === type);
    console.log(findType, code);
  };

  const handleSelect = () => {
    setSelected(prev => !prev);
    const colorObject = { type: 'color', value: code };
    console.log('array:', context.appliedFilters);
    // checkObjects(
    //   context.appliedFilters.length > 0
    //     ? checkObjects(context.appliedFilters, ...colorObject)
    //     : context.setAppliedFilters(prev => [...prev, colorObject]),
    // );
    context.setAppliedFilters(prev => [...prev, colorObject]);
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
        </li>
      )}
    </>
  );
}

export default ColorItem;
