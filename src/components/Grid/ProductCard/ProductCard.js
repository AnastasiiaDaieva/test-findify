import s from './ProductCard.module.scss';

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
        <div className={s.ProductCard__wrapper}>
          <img src={image_url} alt={title} className={s.ProductCard__image} />
        </div>
        <li>{title}</li>
        {compare_at === null ? (
          <p>$ {price[0]}</p>
        ) : (
          <>
            <p>{calcDiscount(compare_at, price)} % off</p>
            <p>sale</p>
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
