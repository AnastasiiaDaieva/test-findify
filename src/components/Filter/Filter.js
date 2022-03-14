import { nanoid } from 'nanoid';

import s from './Filter.module.scss';

import FacetTemplate from './Facets/FacetElements/FacetTemplate';

function Filter({ facets, setFunc }) {
  const setFilter = object => {
    setFunc(object);
  };

  return (
    <div className={s.Filter}>
      <h2 className={s.Filter__heading}>Filters</h2>
      <ul className={s.Filter__options}>
        {facets.map(({ name, type, values }) => (
          <FacetTemplate
            key={nanoid()}
            name={name}
            type={type}
            array={values}
            setFunc={setFilter}
          />
        ))}
      </ul>

      <div></div>
    </div>
  );
}

export default Filter;
