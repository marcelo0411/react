import React from 'react';
import ReactDOM from 'react-dom';
import Friend from './friend';

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Friend />, div);
    ReactDOM.unmountComponentAtNode(div);
});
