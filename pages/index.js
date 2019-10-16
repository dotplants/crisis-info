import React from 'react';
import { useRouter } from 'next/router';

import Header from '../components/header';
import Footer from '../components/footer';
import Column from '../components/column';

const spl = (str, arr = []) => {
  arr.push(str);
  const pos = str.lastIndexOf('.');

  if (pos !== -1) {
    return spl(str.substring(0, pos), arr);
  }
  return arr;
};

const Index = () => {
  const { loc } = useRouter().query;
  const locList = loc ? spl(loc) : [];

  return (
    <>
      <Header />

      {locList.map((id, key) => (
        <Column id={id} key={key} />
      ))}

      <Footer hideGoToTop={!loc} />
    </>
  );
};

export default Index;
