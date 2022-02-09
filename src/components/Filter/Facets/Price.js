import s from './Price.module.scss';
import { useState } from 'react';
function Price() {
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(1500);

  const getVals = e => {
    if (e.target.id === 'minprice') {
      setMinPrice(e.target.value);
    } else {
      setMaxPrice(e.target.value);
    }
    console.log(minPrice, maxPrice);
  };
  return (
    <section className={s.rangeslider}>
      <p>Price</p>
      <input
        id="minprice"
        className={s.Price_input}
        min="0"
        max="1500"
        type="range"
        onChange={getVals}
      />
      <input
        id="maxprice"
        className={s.Price_input}
        min="0"
        max="1500"
        type="range"
        onChange={getVals}
      />
      <span className={s.rangeValues}>$ {minPrice}</span>
      <span className={s.rangeValues}>${maxPrice}</span>
    </section>
  );
}

export default Price;
