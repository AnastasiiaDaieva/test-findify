import s from './ProductCard.module.scss';

import ConditionalImage from './ConditionalImage/ConditionalImage';
import ConditionalPrice from './ConditionalPrice/ConditionalPrice';

function ProductCard({ id, item }) {
  const { image_url, compare_at, product_url, price, title } = item;

  return (
    <li key={id} className={s.ProductCard}>
      <a href={product_url} target="_blank" rel="noreferrer noopener nofollow">
        <div className={s.ProductCard__thumb}>
          <ConditionalImage
            compare_at={compare_at}
            price={price}
            title={title}
            image_url={image_url}
          />
          <div className={s.ProductCard__wrapper}>
            <p className={s.ProductCard__title}>{title}</p>
            <ConditionalPrice price={price} compare_at={compare_at} />
          </div>
        </div>
      </a>
    </li>
  );
}

export default ProductCard;
