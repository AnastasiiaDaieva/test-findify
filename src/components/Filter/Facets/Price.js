import s from './Price.module.scss';

import { useState, useEffect } from 'react';

import { ReactComponent as PriceDivider } from '../../../icons/price-divider.svg';

function Price({ options, passFilter }) {
  const getRange = () => {
    const raw = options[0].value;
    const transformed = raw.split('_');
    return transformed;
  };

  const array = getRange();

  const [minPrice, setMinPrice] = useState(Math.round(array[0]));
  const [maxPrice, setMaxPrice] = useState(Math.round(array[1]));
  const [currentMinPrice, setCurrentMinPrice] = useState(minPrice);
  const [currentMaxPrice, setCurrentMaxPrice] = useState(maxPrice);
  const [range, setRange] = useState({});

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
  };

  // an unfinished attempt to pass filter values
  const setPriceRange = () => {
    passFilter({ min: currentMinPrice, highest: currentMaxPrice });
    // console.log('set range:', range);
  };

  return (
    <>
      {options === undefined ? (
        'Loading...'
      ) : (
        <section className={s.Price}>
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
          <div className={s.Price__value}>
            <span className={s.Price__window}>$ {currentMinPrice}</span>
            <PriceDivider className={s.Price__divider} />
            <span className={s.Price__window}>$ {currentMaxPrice}</span>
            <button
              type="button"
              onClick={setPriceRange}
              className={s.Price__button}
            >
              Go
            </button>
          </div>
        </section>
      )}
    </>
  );
}

export default Price;
