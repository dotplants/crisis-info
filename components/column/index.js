import React from 'react';
import PropTypes from 'prop-types';
import { Collapse, Alert, Container } from 'reactstrap';

import data from '../../data';

const Column = props => {
  const { id, isOpen, setOpen } = props;
  const d = data[id];
  if (!d)
    return (
      <Container className="mt-4 mb-4">
        <Alert color="danger">
          地域ID: <b>{id}</b> は存在しません
          <br />
          必要と思われる地域が登録されていませんか？
          <a
            href="https://github.com/dotplants/crisis-info/labels/Location%F0%9F%9A%A9"
            target="_blank"
            rel="noopener noreferrer"
          >
            私達に教えて下さい
          </a>
        </Alert>
      </Container>
    );

  return (
    <Container className="mt-4 mb-4 location">
      <h3 onClick={setOpen} className="title">
        {d.name}
      </h3>
      <Collapse isOpen={isOpen}>
        <div className="row">あ</div>
        <hr />
      </Collapse>
    </Container>
  );
};

Column.propTypes = {
  id: PropTypes.string,
  isOpen: PropTypes.bool.isRequired,
  setOpen: PropTypes.func.isRequired
};

export default Column;
