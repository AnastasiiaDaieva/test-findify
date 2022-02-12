import { nanoid } from 'nanoid';

import s from './Material.module.scss';

function Material({ options }) {
  return (
    <>
      {options === undefined ? (
        'Loading...'
      ) : (
        <>
          {options.map(({ value, count }) => (
            <div key={nanoid()}>
              <input type="checkbox" id="scales" name="scales" />
              <label htmlFor="scales">{value}</label>
              <span className={s.Material__count}>{`(${count})`}</span>
            </div>
          ))}
        </>
      )}
    </>
  );
}

export default Material;
