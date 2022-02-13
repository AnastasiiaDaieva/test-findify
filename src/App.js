import Header from './components/Header/Header';

import s from './App.module.scss';
import Filter from './components/Filter/Filter';
import Grid from './components/Grid/Grid';
import axios from 'axios';

import { useEffect, useState } from 'react';
import Breadcrumbs from './components/Grid/Breadcrumbs/Breadcrumbs';

function App() {
  const [products, setProducts] = useState([]);
  const [facets, setFacets] = useState([]);
  const [loading, setLoading] = useState(false);
  const [breadcrumbs, setBreadcrumbs] = useState([]);

  useEffect(() => {
    setLoading(true);
    axios
      .get(
        'https://findify-assets.s3.amazonaws.com/test-task/test_response.json',
      )
      .then(results => {
        setProducts(results.data.items);
        setFacets(results.data.facets);
        console.log(results.data);
      })
      .catch(error => console.log(error.message))
      .finally(setLoading(false));
  }, []);

  const setFinalFilter = array => {
    setBreadcrumbs(array);
    console.log(breadcrumbs);
  };

  return (
    <>
      {loading ? (
        'Loading...'
      ) : (
        <div className={s.App}>
          <header className={s.App__header}>
            <Header />
          </header>
          <main className={s.App__main}>
            <Filter
              facets={facets}
              loading={loading}
              breadcrumbs={setFinalFilter}
            />
            <div className={s.App__body}>
              <Breadcrumbs appliedFilters={breadcrumbs} />
              <Grid items={products} />
            </div>
          </main>
        </div>
      )}
    </>
  );
}

export default App;
