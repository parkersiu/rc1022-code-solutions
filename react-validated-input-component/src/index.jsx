import React from 'react';
import ReactDOM from 'react-dom';
import { ValidatedInput } from './validated-input';

const element = (
  <div>
    <ValidatedInput />
  </div>
);

const container = document.querySelector('#root');
const root = ReactDOM.createRoot(container);

root.render(element);
