import s from './ColorItem.module.scss';
import { ReactComponent as Checkmark } from '../../../icons/checkmark.svg';
import axios from 'axios';
import { useState, useEffect } from 'react';

function ColorItem({
  checkedCallback,
  checked,
  name,
  code,
  colorArray,
  colorsMap,
}) {
  console.log(colorArray, colorsMap);
  //   const [colorsMap, setColorsMap] = useState([]);

  //   useEffect(() => {
  //     axios
  //       .get(
  //         'https://findify-assets.s3.amazonaws.com/test-task/test_color_mapping.json',
  //       )
  //       .then(results => setColorsMap(results.data));
  //   }, []);

  const getCount = (array, name) => {
    const result = array.find(({ value, count }) => name === value);
    console.log(result);

    if (!result) {
      return 0;
    } else {
      return result.count;
    }
  };
  return (
    <>
      {colorsMap === undefined ? (
        'Loading...'
      ) : (
        <li className={s.ColorItem__option}>
          <div className={s.ColorItem__wrapper} onClick={checkedCallback}>
            <input
              type="checkbox"
              className={`${s.ColorItem__checkbox}, ${s.ColorItem__checkbox_relative}`}
            />
            {checked && <Checkmark className={s.ColorItem__checkmark} />}
            <span
              className={s.ColorItem__checkbox}
              style={{
                backgroundColor: code,
                backgroundImage: `url(${code})`,
                border: code === '#fff' && '1px solid black',
              }}
            ></span>
            <label htmlFor="scales">{name}</label>
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
