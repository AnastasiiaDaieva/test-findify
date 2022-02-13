import { nanoid } from 'nanoid';
import { useState } from 'react';
import s from './Material.module.scss';
import MaterialItem from './MaterialItem';
import MoreLess from './MoreLess';

function Material({ options }) {
  const [seeMore, setSeeMore] = useState(false);
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
        <ul className={s.Material__options}>
          {arrangedArray().map(({ value, count }) => (
            <MaterialItem value={value} count={count} key={nanoid()} />
          ))}
          <MoreLess boolean={seeMore} setBoolean={setMore} />
        </ul>
      )}
    </>
  );
}

export default Material;
