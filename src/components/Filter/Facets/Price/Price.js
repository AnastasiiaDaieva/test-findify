import s from './Price.module.scss';

import { useState, useEffect, useContext } from 'react';

import { UserContext } from 'UserContext';

import { ReactComponent as PriceDivider } from '../../../../icons/price-divider.svg';

function Price({ value }) {
  const getRange = () => {
    const transformed = value.split('_');
    return transformed;
  };

  const array = getRange();

  const [minPrice, setMinPrice] = useState(Math.round(array[0]));
  const [maxPrice, setMaxPrice] = useState(Math.round(array[1]));

  const [currentMinPrice, setCurrentMinPrice] = useState(minPrice);
  const [currentMaxPrice, setCurrentMaxPrice] = useState(maxPrice);

  const context = useContext(UserContext);

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

  const handleGo = () => {
    const breadcrumbsRange = `$${currentMinPrice}-$${currentMaxPrice}`;
    const rangeObject = { type: 'range', value: breadcrumbsRange };
    context.setAppliedFilters(prev => {
      const newArray = prev.some(item => rangeObject.type === item.type)
        ? [...prev.filter(({ type }) => type !== rangeObject.type), rangeObject]
        : [...prev, rangeObject];
      return newArray;
    });
  };

  return (
    <>
      {value === undefined ? (
        'Loading...'
      ) : (
        <section className={s.Price}>
          <div className={s.Price__input_container}>
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
          </div>
          <div className={s.Price__value}>
            <span className={s.Price__window}>$ {currentMinPrice}</span>
            <PriceDivider className={s.Price__divider} />
            <span className={s.Price__window}>$ {currentMaxPrice}</span>
            <button
              type="button"
              onClick={handleGo}
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
