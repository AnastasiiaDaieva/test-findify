import { useState } from 'react';

import { ReactComponent as OpenFacet } from '../../../../icons/facet-open.svg';
import { ReactComponent as CloseFacet } from '../../../../icons/facet-close.svg';

import s from './FacetHeading.module.scss';

function FacetHeading({ name, toggleCallback }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleFacet = () => {
    setIsOpen(prev => !prev);
    toggleCallback();
  };

  return (
    <div onClick={toggleFacet} className={s.FacetHeading__wrapper}>
      <h3 className={s.FacetHeading}>{name}</h3>
      {isOpen ? <CloseFacet /> : <OpenFacet />}
    </div>
  );
}

export default FacetHeading;
