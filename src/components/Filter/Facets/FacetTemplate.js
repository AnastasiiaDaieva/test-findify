import { useState } from 'react/cjs/react.development';
import FacetHeading from './FacetHeading';
import s from './FacetTemplate.module.scss';
import { nanoid } from 'nanoid';
import Price from './Price';
import Color from './Color';
import Material from './Material';

function FacetTemplate({ name, type, array }) {
  const [facetType, setFacetType] = useState(type);
  const [showFacet, setShowFacet] = useState(false);

  const toggleCallback = () => {
    setShowFacet(prev => !prev);
  };
  return (
    <div className={s.FacetTemplate__wrapper}>
      <FacetHeading name={name} toggleCallback={toggleCallback} />
      {showFacet && (
        <div>
          <ul className={s.FacetTemplate__options}>
            {facetType === 'text' || facetType === 'color' ? (
              <li key={nanoid()} className={s.FacetTemplate__option}>
                {facetType === 'text' ? (
                  <Material options={array} />
                ) : (
                  <Color options={array} />
                )}
                {/* <input type="checkbox" /> <span>(count)</span> */}
              </li>
            ) : (
              <></>
            )}
            {facetType === 'range' && (
              <li key={nanoid()} className={s.FacetTemplate__option}>
                <Price options={array} className />
              </li>
            )}
          </ul>
        </div>
      )}
    </div>
  );
}

export default FacetTemplate;
