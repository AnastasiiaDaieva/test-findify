import { useState } from 'react';
import { nanoid } from 'nanoid';

import s from './FacetTemplate.module.scss';

import FacetHeading from './FacetHeading';
import Price from '../Price/Price';
import Color from '../Color/Color';
import Material from '../Material/Material';

function FacetTemplate({ name, type, array }) {
  const [showFacet, setShowFacet] = useState(false);

  const getRange = () => {
    const raw = array[0].value;
    const transformed = raw.split('_');
    return transformed;
  };
  const transformed = getRange();

  const toggleCallback = () => {
    setShowFacet(prev => !prev);
  };

  return (
    <div className={s.FacetTemplate__wrapper}>
      <FacetHeading name={name} toggleCallback={toggleCallback} />
      {showFacet && (
        <div>
          <ul className={s.FacetTemplate__options}>
            {type === 'text' || type === 'color' ? (
              <li key={nanoid()} className={s.FacetTemplate__option}>
                {type === 'text' ? (
                  <Material options={array} type={type} />
                ) : (
                  <Color options={array} type={type} />
                )}
              </li>
            ) : (
              <></>
            )}
            {type === 'range' && (
              <li key={nanoid()} className={s.FacetTemplate__option}>
                <Price rangeProp={transformed} type={type} options={array} />
              </li>
            )}
          </ul>
        </div>
      )}
    </div>
  );
}

export default FacetTemplate;
