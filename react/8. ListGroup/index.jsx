// @ts-check

import ReactDOM from 'react-dom/client';
import React from 'react';

import ListGroup from './ListGroup.jsx';

const dom = (
  <ListGroup>
    <p>one</p>
    <p>two</p>
  </ListGroup>
);

// @ts-ignore
const root = ReactDOM.createRoot(document.getElementById('container'));
root.render(dom);
