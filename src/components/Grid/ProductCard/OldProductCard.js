import s from './ProductCard.module.scss';

import { ReactComponent as SaleSticker } from '../../../icons/sale-sticker.svg';
import { ReactComponent as DiscountSticker } from '../../../icons/discount-sticker.svg';

function ProductCard({ id, item }) {
  const { image_url, compare_at, product_url, price, title } = item;

  return (
    <li key={id} className={s.ProductCard}>
      <a href={product_url} target="_blank" rel="noreferrer noopener nofollow">
        {compare_at === null ? (
          <>
            <div className={s.ProductCard__img_wrapper}>
              <img
                src={image_url}
                alt={title}
                className={s.ProductCard__image}
              />
            </div>
            <div className={s.ProductCard__wrapper}>
              <p className={s.ProductCard__title}>{title}</p>
              <p className={s.ProductCard__price}>$ {Math.ceil(price[0])}</p>
            </div>
          </>
        ) : (
          <>
            <div className={s.ProductCard__img_wrapper}>
              <div className={s.ProductCard__discount}>
                <DiscountSticker className={s.ProductCard__discount_tag} />
                {/* <p className={s.ProductCard__discount_text}>
                  {calcDiscount(compare_at, price)} % off
                </p> */}
              </div>
              <div className={s.ProductCard__sale}>
                <SaleSticker className={s.ProductCard__sale_tag} />
                <p className={s.ProductCard__sale_text}>sale</p>
              </div>
              <img
                src={image_url}
                alt={title}
                className={s.ProductCard__image}
              />
            </div>
            <div className={s.ProductCard__wrapper}>
              <p className={s.ProductCard__title}>{title}</p>
              <p className={s.ProductCard__price}>
                <span className={s.ProductCard__original_price}>
                  $ {compare_at}
                </span>
                <span>$ {Math.ceil(price[0])}</span>
              </p>
            </div>
          </>
        )}
      </a>
    </li>
  );
}

export default ProductCard;
