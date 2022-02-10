import { nanoid } from 'nanoid';
import { useState } from 'react';
import { ReactComponent as CloseFacet } from '../../../icons/facet-close.svg';

function Material({ options }) {
  return (
    <>
      {options === undefined ? (
        'Loading...'
      ) : (
        <>
          <div>
            <span>Material</span>
            <CloseFacet />
          </div>
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

export default Material;
