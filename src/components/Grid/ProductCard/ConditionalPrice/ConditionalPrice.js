import s from './ConditionalPrice.module.scss';

function ConditionalPrice({ compare_at, price }) {
  return (
    <p className={s.ConditionalPrice}>
      {compare_at !== null && (
        <span className={s.ConditionalPrice__original}>$ {compare_at}</span>
      )}
      <span>$ {Math.ceil(price[0])}</span>
    </p>
  );
}
export default ConditionalPrice;
