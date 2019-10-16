import React from 'react';
import PropTypes from 'prop-types';

import Search from './search';

const Header = props => {
  const { hideSearch } = props;

  return (
    <div className="text-center">
      <div className="banner mb-4" />

      <div>
        <span className="h1">Crisis Info</span>
        <span className="ml-1">(Beta)</span>
      </div>

      <p>災害時に必要な情報やリンク集をウェブアプリで提供</p>

      <div className="container">
        {!hideSearch ? <Search /> : null}
        <hr />
      </div>
    </div>
  );
};

Header.propTypes = {
  hideSearch: PropTypes.bool
};

export default Header;
