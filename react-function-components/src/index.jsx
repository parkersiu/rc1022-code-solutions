import React from 'react';
import ReactDOM from 'react-dom';

function CustomButton() {
  return <button>Click Me!</button>;
}

const root = ReactDOM.createRoot(document.querySelector('#root'));
const element = <CustomButton/>;
root.render(element);
