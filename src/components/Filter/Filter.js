import { useEffect, useState } from 'react';
import Colors from './Facets/Colors';
import Materials from './Facets/Materials';
import s from './Filter.module.scss';

const { default: Price } = require('./Facets/Price');

function Filter({ facets }) {
  const [currentFacet, setCurrentFacet] = useState('');
  const [materials, colors, price] = facets;
  console.log(materials, colors, price);
  return (
    <div className={s.Filter}>
      <p>Filters</p>
      <div className={s.Filter__options}>
        <Materials options={materials} />
        <Colors options={colors} />
        <Price options={price} />
      </div>
    </div>
  );
}

export default Filter;
