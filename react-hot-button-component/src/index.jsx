import React from 'react';
import ReactDOM from 'react-dom';
import { CustomButton } from './hot-button';

const element = (
  <div>
    <CustomButton />
  </div>
);

const container = document.querySelector('#root');
const root = ReactDOM.createRoot(container);

root.render(element);
