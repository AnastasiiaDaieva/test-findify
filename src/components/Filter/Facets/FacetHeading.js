import { useState } from 'react';
import { ReactComponent as OpenFacet } from '../../../icons/facet-open.svg';
import { ReactComponent as CloseFacet } from '../../../icons/facet-close.svg';

function FacetHeading({ name, toggleCallback }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleFacet = () => {
    setIsOpen(prev => !prev);
    toggleCallback();
    console.log(isOpen);
  };
  return (
    <h3 onClick={toggleFacet}>
      <span>{name}</span> {isOpen ? <CloseFacet /> : <OpenFacet />}
    </h3>
  );
}

export default FacetHeading;
