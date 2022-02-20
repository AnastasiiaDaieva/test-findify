import { ReactComponent as SaleSticker } from '../../../../../icons/sale-sticker.svg';
import { ReactComponent as DiscountSticker } from '../../../../../icons/discount-sticker.svg';
import { ReactComponent as SaleStickerMob } from '../../../../../icons/sale-sticker-mobile-2.svg';
import { ReactComponent as DiscountStickerMob } from '../../../../../icons/discount-sticker-mobile-2.svg';

import s from './Discount.module.scss';

function Discount({ compare_at, price }) {
  const calcDiscount = (compare_at, price) => {
    const difference = compare_at - Math.ceil(price);
    const discount = Math.ceil((difference / compare_at) * 100);
    return discount;
  };

  const mediaQuery = window.matchMedia(
    '(min-width: 400px) and (max-width: 499.99px)',
  );

  return (
    <div className={s.Discount}>
      <div className={s.Discount__percentage}>
        {mediaQuery.matches ? (
          <DiscountStickerMob className={s.Discount__percentage_tag} />
        ) : (
          <DiscountSticker className={s.Discount__percentage_tag} />
        )}

        <p className={s.Discount__percentage_text}>
          {calcDiscount(compare_at, price)} % off
        </p>
      </div>
      <div className={s.Discount__sale}>
        {mediaQuery.matches ? (
          <SaleStickerMob className={s.Discount__sale_tag} />
        ) : (
          <SaleSticker className={s.Discount__sale_tag} />
        )}
        <p className={s.Discount__sale_text}>sale</p>
      </div>
    </div>
  );
}

export default Discount;
