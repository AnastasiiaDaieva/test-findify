import { ReactComponent as OpenFacet } from '../../../icons/facet-open.svg';
import { ReactComponent as CloseFacet } from '../../../icons/facet-close.svg';

function MoreLess({ boolean, setBoolean }) {
  const handleFacetView = () => {
    setBoolean();
  };
  return (
    <>
      <button type="button" onClick={handleFacetView}>
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
    </>
  );
}

export default MoreLess;
