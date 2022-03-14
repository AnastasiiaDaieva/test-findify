import { nanoid } from 'nanoid';
import axios from 'axios';

import { useEffect, useState } from 'react';

import MoreLess from '../FacetElements/MoreLess';
import ColorItem from './ColorItem';

function Color({ options, setFunc }) {
  const [seeMore, setSeeMore] = useState(false);
  const [colorsMap, setColorsMap] = useState([]);
  // const [chosenColors, setChosenColors] = useState([]);
  // console.log(chosenColors);

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

  const sendFilter = colorObject => {
    setFunc(colorObject);
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
        <>
          {arrangedArray().map(({ name, code }) => (
            <ColorItem
              key={nanoid()}
              name={name}
              code={code}
              colorArray={options}
              colorsMap={colorsMap}
              setFunc={sendFilter}
            />
          ))}
          <MoreLess boolean={seeMore} setBoolean={setMore} />
        </>
      )}
    </>
  );
}

export default Color;
