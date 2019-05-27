import React from 'react';
import ReactDOM from 'react-dom';
import HeaderDownMenu from './headerDownMenu';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<HeaderDownMenu />, div);
  ReactDOM.unmountComponentAtNode(div);
});
