import React from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';

import { version } from '../package';

const Footer = props => {
  const { hideGoToTop } = props;

  return (
    <footer className="container mt-4 mb-4">
      <hr />
      <ul>
        {!hideGoToTop ? (
          <li>
            <Link href="/">
              <a>&lt; トップに戻る</a>
            </Link>
          </li>
        ) : null}
        <li>Crisis Info (v{version})</li>
        <li>
          Powered by
          <a
            href="https://dotplants.net/"
            target="_blank"
            rel="noopener noreferrer"
            className="ml-1"
          >
            .Plants
          </a>
        </li>
        <li>
          <a
            href="https://github.com/dotplants/crisis-info"
            target="_blank"
            rel="noopener noreferrer"
          >
            ソースコード
          </a>
        </li>
        <li>
          <Link href="/install">
            <a>アプリをインストール</a>
          </Link>
        </li>
      </ul>
    </footer>
  );
};

Footer.propTypes = {
  hideGoToTop: PropTypes.bool
};

export default Footer;
