import Discount from './Discount/Discount';
import s from '../ProductCard.module.scss';

function ConditionalImage({ compare_at, title, image_url, price }) {
  return (
    <div className={s.ConditionalImage__wrapper}>
      {compare_at !== null && (
        <Discount price={price} compare_at={compare_at} />
      )}
      <img src={image_url} alt={title} className={s.ConditionalImage} />
    </div>
  );
}

export default ConditionalImage;
