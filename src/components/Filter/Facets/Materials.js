import { nanoid } from 'nanoid';
import { useState } from 'react';

function Materials({ options }) {
  return (
    <>
      {options === undefined ? (
        'Loading...'
      ) : (
        <>
          <p>Material</p>
          {options.values.map(({ value, count }) => (
            <div key={nanoid()}>
              <input type="checkbox" id="scales" name="scales" />
              <label htmlFor="scales">{value}</label>
              <span>{`(${count})`}</span>
            </div>
          ))}
        </>
      )}
    </>
  );
}

export default Materials;
