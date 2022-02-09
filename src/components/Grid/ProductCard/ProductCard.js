import s from './ProductCard.module.scss';
import { ReactComponent as SaleSticker } from '../../../icons/sale-sticker.svg';
import { ReactComponent as DiscountSticker } from '../../../icons/discount-sticker.svg';

function ProductCard({ id, item }) {
  const { image_url, compare_at, product_url, price, title } = item;
  const calcDiscount = (compare_at, price) => {
    const difference = compare_at - price;
    const discount = Math.floor((difference / compare_at) * 100);
    return discount;
  };

  return (
    <div key={id} className={s.ProductCard}>
      <a href={product_url} target="_blank" rel="noreferrer noopener nofollow">
        {compare_at === null ? (
          <>
            <div className={s.ProductCard__wrapper}>
              <img
                src={image_url}
                alt={title}
                className={s.ProductCard__image}
              />
            </div>
            <li>{title}</li>
            <p>$ {price[0]}</p>
          </>
        ) : (
          <>
            <div className={s.ProductCard__wrapper}>
              <div className={s.ProductCard__discount}>
                <DiscountSticker className={s.ProductCard__discount_tag} />
                <p className={s.ProductCard__discount_text}>
                  {calcDiscount(compare_at, price)} % off
                </p>
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
            <li>{title}</li>

            <p>
              <span>$ {compare_at}</span>
              <span>$ {price}</span>
            </p>
          </>
        )}
      </a>
    </div>
  );
}

export default ProductCard;
