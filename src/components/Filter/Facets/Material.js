import { nanoid } from 'nanoid';
import { useState } from 'react';
import s from './Material.module.scss';
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
            <li key={nanoid()} className={s.Material__option}>
              <div className={s.Color__wrapper}>
                <input type="checkbox" id="scales" name="scales" />
                <label htmlFor="scales">{value}</label>
              </div>
              <span className={s.Material__count}>{`(${count})`}</span>
            </li>
          ))}
          <MoreLess boolean={seeMore} setBoolean={setMore} />
        </ul>
      )}
    </>
  );
}

export default Material;
