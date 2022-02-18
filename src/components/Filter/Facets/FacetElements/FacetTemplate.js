import { useState, useEffect } from 'react';
import { nanoid } from 'nanoid';

import s from './FacetTemplate.module.scss';

import FacetHeading from './FacetHeading';
import Price from '../Price/Price';
import Color from '../Color/Color';
import Material from '../Material/Material';

function FacetTemplate({ name, type, array, breadcrumbs }) {
  const [showFacet, setShowFacet] = useState(false);
  const [selectedFilters, setSelectedFilters] = useState([]);

  // an unfinished attempt to pass filter values
  useEffect(() => {
    breadcrumbs();
  }, []);

  const toggleCallback = () => {
    setShowFacet(prev => !prev);
  };

  // an unfinished attempt to pass filter values
  const passBreadcrumbs = object => {
    setSelectedFilters(prevState => [...prevState, object]);
    console.log('templateObject:', selectedFilters);
    breadcrumbs(selectedFilters);
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
                  <Material
                    options={array}
                    type={type}
                    passFilter={() => passBreadcrumbs}
                  />
                ) : (
                  <Color
                    options={array}
                    type={type}
                    passFilter={() => passBreadcrumbs}
                  />
                )}
              </li>
            ) : (
              <></>
            )}
            {type === 'range' && (
              <li key={nanoid()} className={s.FacetTemplate__option}>
                <Price
                  options={array}
                  type={type}
                  passFilter={() => passBreadcrumbs}
                />
              </li>
            )}
          </ul>
        </div>
      )}
    </div>
  );
}

export default FacetTemplate;
