// import { useState } from 'react';
import { nanoid } from 'nanoid';

import s from './Filter.module.scss';
import FacetTemplate from './Facets/FacetTemplate';

// const { default: Price } = require('./Facets/Price');

function Filter({ facets }) {
  // const [currentFacets, setCurrentFacets] = useState([]);
  // const [material, color, price] = facets;
  // console.log(material, color, price);
  console.log(facets);
  // useEffect(() => {
  //   switch (currentFacet) {
  //     case 'Material':
  //       setCurrentFacet('material');
  //       break;
  //     case 'Color':
  //       setCurrentFacet('color');
  //       break;
  //     case 'Price':
  //       setCurrentFacet('price');
  //       break;
  //     default:
  //       setCurrentFacet('');
  //   }
  // }, [currentFacet]);
  // console.log(currentFacets);
  // const handleFilterFormat = name => {
  //   // console.log('prop func:', e.target);
  //   setCurrentFacets(prevState => [...prevState, name]);
  //   console.log('check current facet:', currentFacets);
  // };

  // const setArray = newType => {
  //   setCurrentFacets(prevState =>
  //     prevState.some(type => type === newType)
  //       ? [...prevState.filter(type => type !== newType)]
  //       : [...prevState, newType],
  //   );
  // };

  // const facetToggle = () => {
  //   switch (currentFacets) {
  //     case currentFacets.includes('material'):
  //     case currentFacets.includes('color'):
  //     case currentFacets.includes('range'):
  //     default:
  //   }
  // };

  return (
    <div className={s.Filter}>
      <h2 className={s.Filter__heading}>Filters</h2>

      <ul className={s.Filter__options}>
        {facets.map(({ name, type, values }) => (
          <FacetTemplate
            key={nanoid()}
            name={name}
            type={type}
            array={values}
          />
        ))}
      </ul>

      <div></div>
    </div>
  );
}

export default Filter;
