import React from 'react';
import LogoIcon from 'images/logo.png';
import './logo.component.styl';

export const Logo = (title) => (
    <div className="logo">
        <img src={LogoIcon} alt="Company Logo"/>
    </div>
);
