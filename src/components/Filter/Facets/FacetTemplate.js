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
    <>
      <FacetHeading name={name} toggleCallback={toggleCallback} />
      {showFacet && (
        <div>
          {facetType === 'text' || facetType === 'color' ? (
            <ul className={s.FacetTemplate__options}>
              <li key={nanoid()}>
                {facetType === 'text' ? (
                  <Material options={array} />
                ) : (
                  <Color options={array} />
                )}
                {/* <input type="checkbox" /> <span>(count)</span> */}
              </li>
            </ul>
          ) : (
            <></>
          )}
          {facetType === 'range' && <Price options={array} />}
        </div>
      )}
    </>
  );
}

export default FacetTemplate;
