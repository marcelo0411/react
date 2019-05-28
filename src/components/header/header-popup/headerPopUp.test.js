import React from 'react';
import ReactDOM from 'react-dom';
import HeaderPopUp from './headerPopUp';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<HeaderPopUp />, div);
  ReactDOM.unmountComponentAtNode(div);
});
