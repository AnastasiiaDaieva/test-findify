import Header from './components/Header/Header';
import Breadcrumbs from './components/Grid/Breadcrumbs/Breadcrumbs';
import Filter from './components/Filter/Filter';
import Grid from './components/Grid/Grid';

import s from './App.module.scss';

import axios from 'axios';

import { useCallback, useEffect, useState } from 'react';

function App() {
  const [products, setProducts] = useState([]);
  const [facets, setFacets] = useState([]);
  const [loading, setLoading] = useState(false);
  const [appliedFilters, setAppliedFilters] = useState([]);

  const setBreadcrumbsFilters = useCallback(object => {
    console.log(object);
    if (object.type === 'range') {
      setAppliedFilters(prev => {
        const newArray = prev.some(item => object.type === item.type)
          ? [...prev.filter(({ type }) => type !== object.type), object]
          : [...prev, object];
        return newArray;
      });
    } else {
      setAppliedFilters(prev => {
        const newArray = prev.some(item => object.value === item.value)
          ? [...prev.filter(({ value }) => value !== object.value)]
          : [...prev, object];
        return newArray;
      });
    }

    console.log(appliedFilters);
  }, []);

  const hardCodeBreadcrumbs = [
    { type: 'text', value: 'Amethyst' },
    { type: 'color', value: '#000' },
    { type: 'range', value: '1-500' },
  ];

  useEffect(() => {
    setLoading(true);
    axios
      .get(
        'https://findify-assets.s3.amazonaws.com/test-task/test_response.json',
      )
      .then(results => {
        setProducts(results.data.items);
        setFacets(results.data.facets);
      })
      .catch(error => console.log(error.message))
      .finally(setLoading(false));
  }, []);

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
              setFunc={setBreadcrumbsFilters}
            />
            <div className={s.App__body}>
              <Breadcrumbs
                filterArray={appliedFilters}
                setFunc={setAppliedFilters}
                style={{
                  display: appliedFilters.length > 0 ? 'flex' : 'none',
                }}
              />

              <Grid items={products} />
            </div>
          </main>
        </div>
      )}
    </>
  );
}

export default App;
