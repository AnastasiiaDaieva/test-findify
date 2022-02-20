import { nanoid } from 'nanoid';
import { useState } from 'react';
import MaterialItem from './MaterialItem';
import MoreLess from '../FacetElements/MoreLess';

function Material({ options, type }) {
  const [seeMore, setSeeMore] = useState(false);

  const [selectedItems, setSelectedItems] = useState([]);

  const setMore = () => {
    setSeeMore(!seeMore);
  };

  const arrangedArray = () => {
    if (seeMore) {
      return options;
    } else {
      return options.slice(0, 6);
    }
  };

  return (
    <>
      {arrangedArray() === undefined ? (
        'Loading...'
      ) : (
        <>
          {arrangedArray().map(({ value, count }) => (
            <MaterialItem
              value={value}
              count={count}
              key={nanoid()}
              type={type}
              onClick={setSelectedItems}
              selected={selectedItems}
            />
          ))}
          <MoreLess boolean={seeMore} setBoolean={setMore} />
        </>
      )}
    </>
  );
}

export default Material;
