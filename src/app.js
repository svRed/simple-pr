import React from 'react';
import {render} from 'react-dom';
import {BrowserRouter} from 'react-router-dom';
import {Root} from 'components/root';
import 'styles/main.styl';

render(
    <BrowserRouter>
        <Root />
    </BrowserRouter>,
    document.getElementById('root')
);