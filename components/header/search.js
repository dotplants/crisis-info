import React, { useState } from 'react';
import Link from 'next/link';
import Fuse from 'fuse.js';

import data from '../../data';

const options = {
  shouldSort: true,
  keys: ['id', 'name', 'keyword']
};

const fuse = new Fuse(Object.values(data), options);

const Search = () => {
  const [value, setValue] = useState('');

  return (
    <div className="form-row justify-content-center">
      <div className="col-lg-8">
        <input
          type="text"
          className="form-control"
          placeholder="県・市・区名で検索 - 地域に紐付いた情報を表示できます"
          onChange={e => setValue(e.target.value)}
        />

        <div className="mt-2 search-result">
          {fuse.search(value).map((result, key) => (
            <Link href={`/?loc=${result.id}`} key={key}>
              <a className="btn btn-sm btn-outline-primary">{result.name}</a>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Search;
