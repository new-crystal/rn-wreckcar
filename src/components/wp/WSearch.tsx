import * as r from 'react';

export default function WSearch() {
  const [query, setQuery] = r.useState('');
  const onSearch = (e: any) => {
    const searchV = e.target.query;
    console.log(searchV);
  };
  return (
    <>
      <input value={query} onChange={onSearch} />
    </>
  );
}
