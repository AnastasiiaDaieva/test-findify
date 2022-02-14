import { nanoid } from 'nanoid';
import { useState } from 'react';
import s from './Material.module.scss';
import MaterialItem from './MaterialItem';
import MoreLess from './MoreLess';

function Material({ options, passFilter, type }) {
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
  // an unfinished attempt to pass filter values
  const getSelectedItems = value => {
    setSelectedItems(prevState =>
      prevState.some(item => item === value)
        ? [...prevState.filter(item => item !== value)]
        : [...prevState, value],
    );
    console.log(selectedItems);
    const object = { type: type, values: selectedItems };
    passFilter(object);
  };

  return (
    <>
      {arrangedArray() === undefined ? (
        'Loading...'
      ) : (
        <ul className={s.Material__options}>
          {arrangedArray().map(({ value, count }) => (
            <MaterialItem
              value={value}
              count={count}
              key={nanoid()}
              selected={selectedItems}
              passSelectedItem={getSelectedItems}
            />
          ))}
          <MoreLess boolean={seeMore} setBoolean={setMore} />
        </ul>
      )}
    </>
  );
}

export default Material;
