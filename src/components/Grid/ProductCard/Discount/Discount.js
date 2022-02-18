import { ReactComponent as SaleSticker } from '../../../../icons/sale-sticker.svg';
import { ReactComponent as DiscountSticker } from '../../../../icons/discount-sticker.svg';
import s from './Discount.module.scss';

function Discount({ compare_at, price }) {
  const calcDiscount = (compare_at, price) => {
    const difference = compare_at - Math.ceil(price);
    const discount = Math.ceil((difference / compare_at) * 100);
    return discount;
  };
  return (
    <div className={s.Discount}>
      <div className={s.Discount__percentage}>
        <DiscountSticker className={s.Discount__percentage_tag} />
        <p className={s.Discount__percentage_text}>
          {calcDiscount(compare_at, price)} % off
        </p>
      </div>
      <div className={s.Discount__sale}>
        <SaleSticker className={s.Discount__sale_tag} />
        <p className={s.Discount__sale_text}>sale</p>
      </div>
    </div>
  );
}

export default Discount;
