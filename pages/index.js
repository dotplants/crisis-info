import React, { useState } from 'react';
import { useRouter } from 'next/router';
import { Container } from 'reactstrap';

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
  const [openedColumn, setOpenedColumn] = useState(loc);

  const locList = loc ? spl(loc) : []; // loc === undefined -> index page
  const setOpen = id => setOpenedColumn(openedColumn === id ? null : id);

  return (
    <>
      <Header />
      <Container>
        {loc && <small>地域名を選択して展開できます</small>}
      </Container>

      {locList.map((id, key) => (
        <Column
          id={id}
          key={key}
          isOpen={openedColumn === id}
          setOpen={() => setOpen(id)}
        />
      ))}

      <Footer hideGoToTop={!loc} />
    </>
  );
};

export default Index;
