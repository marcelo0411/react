import React from 'react';
import ReactDOM from 'react-dom';
import My from './my';

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<My />, div);
    ReactDOM.unmountComponentAtNode(div);
});
