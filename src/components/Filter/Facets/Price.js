import s from './Price.module.scss';
import { useState, useEffect } from 'react';
import { ReactComponent as CloseFacet } from '../../../icons/facet-close.svg';

function Price({ options }) {
  const getRange = () => {
    const raw = options.values[0].value;
    const transformed = raw.split('_');
    console.log(transformed);
    return transformed;
  };
  const array = getRange();

  const [minPrice, setMinPrice] = useState(Math.round(array[0]));
  const [maxPrice, setMaxPrice] = useState(Math.round(array[1]));
  const [currentMinPrice, setCurrentMinPrice] = useState(minPrice);
  const [currentMaxPrice, setCurrentMaxPrice] = useState(maxPrice);
  // console.log(price);

  useEffect(() => {
    setMinPrice(Math.round(array[0]));

    setMaxPrice(Math.round(array[1]));
  }, [array]);

  const getVals = e => {
    if (e.target.id === 'minprice') {
      setCurrentMinPrice(e.target.value);
    } else {
      setCurrentMaxPrice(e.target.value);
    }
    console.log(currentMinPrice, currentMaxPrice);
  };

  return (
    <>
      {options === undefined ? (
        'Loading...'
      ) : (
        <section className={s.Price}>
          <div>
            <p>Price</p>
            <CloseFacet />
          </div>
          <input
            id="minprice"
            className={s.Price__input}
            min={minPrice}
            max={maxPrice}
            type="range"
            onChange={getVals}
          />
          <input
            id="maxprice"
            className={s.Price__input}
            min={minPrice}
            max={maxPrice}
            type="range"
            onChange={getVals}
          />
          <div>
            <span className={s.Price__window}>$ {currentMinPrice}</span>
            <span className={s.Price__window}>${currentMaxPrice}</span>
          </div>
        </section>
      )}
    </>
  );
}

export default Price;
