import React from 'react';
import PropTypes from 'prop-types';
import {} from 'reactstrap';

import data from '../../public/static/data';

const Column = props => {
  const { id } = props;
  const d = data[id];

  return (
    <div className="container mt-4 mb-4">
      <h3>{d.name}</h3>
      <div className="row"></div>
      <hr />
    </div>
  );
};

Column.propTypes = {
  id: PropTypes.string
};

export default Column;
