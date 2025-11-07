import React, { useState, useEffect, useRef } from 'react';

const SEARCH_TEXT_KEY = 'searchText';
const SEARCH_COUNT_KEY = 'searchTextChangeCount';
const FIRST_RENDER_KEY = 'appFirstRenderTimestamp';

function App() {
  const products = [
    { category: "Fruits",     price: "$1", stocked: true,  name: "Apple" },
    { category: "Fruits",     price: "$1", stocked: true,  name: "Dragonfruit" },
    { category: "Fruits",     price: "$2", stocked: false, name: "Passionfruit" },
    { category: "Vegetables", price: "$2", stocked: true,  name: "Spinach" },
    { category: "Vegetables", price: "$4", stocked: false, name: "Pumpkin" },
    { category: "Vegetables", price: "$1", stocked: true,  name: "Peas" },
  ];

  // lifted state
  const [inStockOnly, setInStockOnly] = useState(false);
  const [searchText, setSearchText] = useState(
    () => localStorage.getItem(SEARCH_TEXT_KEY) ?? ''
  );
  const isFirstSearchChange = useRef(true);

  useEffect(() => {
    if (!localStorage.getItem(FIRST_RENDER_KEY)) {
      localStorage.setItem(FIRST_RENDER_KEY, new Date().toISOString());
    }

    if (localStorage.getItem(SEARCH_COUNT_KEY) === null) {
      localStorage.setItem(SEARCH_COUNT_KEY, '0');
    }
  }, []);

  // persist search text
  useEffect(() => {
    localStorage.setItem(SEARCH_TEXT_KEY, searchText);

    const currentCount = Number.parseInt(
      localStorage.getItem(SEARCH_COUNT_KEY) ?? '0',
      10
    );
    const safeCount = Number.isNaN(currentCount) ? 0 : currentCount;

    if (isFirstSearchChange.current) {
      isFirstSearchChange.current = false;
      return;
    }

    localStorage.setItem(SEARCH_COUNT_KEY, String(safeCount + 1));
  }, [searchText]);

  return (
    <>
      <Search
        searchText={searchText}
        inStockOnly={inStockOnly}
        setSearchText={setSearchText}
        inStockOnlyChange={setInStockOnly}
      />
      <List
        products={products}
        searchText={searchText}
        inStockOnly={inStockOnly}
      />
    </>
  );
}

function Search({ searchText, inStockOnly, setSearchText, inStockOnlyChange }) {
  return (
    <div>
      <h2>Fruits &amp; Vegetables</h2>

      <label htmlFor="search">Search:</label>
      <input
        id="search"
        type="text"
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
        placeholder="Search..."
      />

      <div>
        <label>
          <input
            type="checkbox"
            checked={inStockOnly}
            onChange={(e) => inStockOnlyChange(e.target.checked)}
          />
          Only show products in stock
        </label>
      </div>
    </div>
  );
}

function List({ products, searchText, inStockOnly }) {
  const q = searchText.toLowerCase().trim();
  const filtered = products.filter(
    (p) => p.name.toLowerCase().includes(q) && (!inStockOnly || p.stocked)
  );

  return (
    <ul>
      {filtered.map((item) => (
        <Item key={item.name} item={item} />
      ))}
    </ul>
  );
}

function Item({ item }) {
  return (
    <li>
      <p>
        <span>{item.stocked ? '✅' : '❌'}</span>{' '}
        <span>{item.name}</span>{' '}
        <span>{item.price}</span>{' '}
        <span>{item.category}</span>
    </p>
    </li>
  );
}

export default App;
