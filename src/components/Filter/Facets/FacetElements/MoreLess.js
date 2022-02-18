import { ReactComponent as OpenFacet } from '../../../../icons/facet-open.svg';
import { ReactComponent as CloseFacet } from '../../../../icons/facet-close.svg';

import s from './MoreLess.module.scss';

function MoreLess({ boolean, setBoolean }) {
  const handleFacetView = () => {
    setBoolean();
  };

  return (
    <button className={s.MoreLess} type="button" onClick={handleFacetView}>
      {boolean ? (
        <>
          <CloseFacet /> Less
        </>
      ) : (
        <>
          <OpenFacet /> More
        </>
      )}
    </button>
  );
}

export default MoreLess;
