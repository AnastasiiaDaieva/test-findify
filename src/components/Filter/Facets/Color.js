import { nanoid } from 'nanoid';
import axios from 'axios';

import s from './Color.module.scss';

import { useEffect, useState } from 'react';

import MoreLess from './MoreLess';
import ColorItem from './ColorItem';

function Color({ options }) {
  const [seeMore, setSeeMore] = useState(false);
  const [colorsMap, setColorsMap] = useState([]);

  useEffect(() => {
    axios
      .get(
        'https://findify-assets.s3.amazonaws.com/test-task/test_color_mapping.json',
      )
      .then(results => setColorsMap(results.data))
      .catch(error => console.log(error.message));
  }, []);

  const setMore = () => {
    setSeeMore(!seeMore);
  };

  const arrangedArray = () => {
    if (seeMore) {
      return colorsMap;
    } else {
      return colorsMap.slice(0, 6);
    }
  };

  return (
    <>
      {arrangedArray() === undefined ? (
        'Loading...'
      ) : (
        <ul className={s.Color__options}>
          {arrangedArray().map(({ name, code }) => (
            <ColorItem
              key={nanoid()}
              name={name}
              code={code}
              colorArray={options}
              colorsMap={colorsMap}
            />
          ))}
          <MoreLess boolean={seeMore} setBoolean={setMore} />
        </ul>
      )}
    </>
  );
}

export default Color;
