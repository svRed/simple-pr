import React from 'react';
import './icon-button.component.styl';

export const IconButton = ({children, name}) => (
    <div className={`icon-button icon-button__${name}`}>
        {children}
    </div>
);