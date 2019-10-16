import React from 'react';

import Header from '../components/header';
import Footer from '../components/footer';
import Link from 'next/link';

const Install = () => {
  return (
    <>
      <Header hideSearch />

      <div className="container">
        <h2 className="mb-4 text-center">インストール方法</h2>

        <p>
          ウェブアプリをインストールすると、オフライン時でも Crisis Info
          を閲覧できるようになります。
          <br />* Crisis Info 外のサイトはネットワーク環境が必要です。
        </p>

        <h3>iOS の場合</h3>
        <ol>
          <li>
            Safari から{' '}
            <Link href="/">
              <a>Crisis Info</a>
            </Link>{' '}
            を開きます。
          </li>
          <li>
            共有ボタンをタップし、「<b>ホーム画面に追加</b>」をタップします。
          </li>
          <li>右上の追加をタップすればインストールされます。</li>
        </ol>

        <h3>Android の場合</h3>
        <ol>
          <li>
            Chrome から{' '}
            <Link href="/">
              <a>Crisis Info</a>
            </Link>{' '}
            を開きます。
          </li>
          <li>
            メニューを開き、「<b>ホーム画面に追加</b>」をタップします。
          </li>
          <li>
            追加をタップし、次の画面でも自動的に追加をタップすればインストールされます。
          </li>
        </ol>
      </div>

      <Footer />
    </>
  );
};

export default Install;
