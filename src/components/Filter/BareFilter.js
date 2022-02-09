import { nanoid } from 'nanoid';

function BareFilter({ options, onClick }) {
  const handleClick = name => {
    // console.log('local func:', e.target);
    console.log(name);
    onClick(name);
  };
  return (
    <>
      {options === undefined ? (
        'Loading...'
      ) : (
        <ul>
          {options.map(({ name }) => (
            <li key={nanoid()} onClick={() => handleClick(name)}>
              {name}
            </li>
          ))}
        </ul>
      )}
    </>
  );
}

export default BareFilter;
