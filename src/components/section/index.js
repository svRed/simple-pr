import React from 'react';
import classNames from 'classnames';
import './section.component.styl';

export const Section = (props) => {
    const {
        custom,
        colorized,
        children,
        mix
    } = props;
    const classes = classNames('section', {
        section_colorized: colorized,
        section_custom: custom,
        [mix]: mix
    });

    return (
      <div className={classes}>
          {children}
      </div>
    );
};