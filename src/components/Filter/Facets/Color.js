import { ReactComponent as CloseFacet } from '../../../icons/facet-close.svg';
import { nanoid } from 'nanoid';
import axios from 'axios';
import s from './Color.module.scss';
import { useEffect, useState } from 'react';
function Color({ options }) {
  console.log(options);
  const [colorsMap, setColorsMap] = useState([]);
  console.log(colorsMap);
  useEffect(() => {
    axios
      .get(
        'https://findify-assets.s3.amazonaws.com/test-task/test_color_mapping.json',
      )
      .then(results => setColorsMap(results.data));
  }, []);

  return (
    <div>
      <p>Color</p> <CloseFacet />
      {colorsMap.map(({ name, code }) => (
        <div key={nanoid()}>
          <input
            type="checkbox"
            id="scales"
            name="scales"
            className={s.Color__checkbox}
          />
          <span
            className={`${s.Color__checkbox}, ${s.Color__checkbox_relative}`}
            style={{ backgroundColor: code }}
          ></span>
          <label htmlFor="scales">{name}</label>
          {/* <span>{`(${count})`}</span> */}
        </div>
      ))}
    </div>
  );
}

export default Color;
