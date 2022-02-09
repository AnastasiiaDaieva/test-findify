import ProductCard from './ProductCard/ProductCard';
import { nanoid } from 'nanoid';
import s from './Grid.module.scss';

function Grid({ items }) {
  return (
    <>
      <ul className={s.Grid}>
        {items.map(item => (
          <ProductCard item={item} key={nanoid()} />
        ))}
      </ul>
    </>
  );
}

export default Grid;
