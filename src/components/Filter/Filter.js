import { useEffect, useState } from 'react';
import BareFilter from './BareFilter';
import { nanoid } from 'nanoid';
import { ReactComponent as OpenFacet } from '../../icons/facet-open.svg';

import Color from './Facets/Color';
import Material from './Facets/Material';
import s from './Filter.module.scss';

const { default: Price } = require('./Facets/Price');

function Filter({ facets }) {
  const [currentFacets, setCurrentFacets] = useState([]);
  const [material, color, price] = facets;
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
  console.log(currentFacets);
  // const handleFilterFormat = name => {
  //   // console.log('prop func:', e.target);
  //   setCurrentFacets(prevState => [...prevState, name]);
  //   console.log('check current facet:', currentFacets);
  // };

  const setArray = newType => {
    setCurrentFacets(prevState =>
      prevState.some(type => type === newType)
        ? [...prevState.filter(type => type !== newType)]
        : [...prevState, newType],
    );
  };

  const facetToggle = () => {
    switch (currentFacets) {
      case currentFacets.includes('material'):
      case currentFacets.includes('color'):
      case currentFacets.includes('range'):
      default:
    }
  };

  return (
    <div className={s.Filter}>
      <p>Filters</p>

      <ul className={s.Filter__options}>
        {facets.map(({ name, type }) => (
          <li key={nanoid()} onClick={() => setArray(type)}>
            <span>{name}</span> <OpenFacet />
          </li>
        ))}
        {currentFacets.includes('text') && <Material options={material} />}
        {currentFacets.includes('color') && <Color options={color} />}
        {currentFacets.includes('range') && <Price options={price} />}
      </ul>

      <div></div>
    </div>
  );
}

export default Filter;
