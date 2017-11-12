import React, {Children, cloneElement} from 'react';
import classNames from 'classnames';
import './grid.component.styl';

export const Cell = ({children, size}) => {
    const classes = classNames('grid__cell', {
        [`grid__cell_${size}`]: size
    });

    return (
      <div className={classes}>{children}</div>
    );
};

export const Grid = ({size, children}) => (
  <div className="grid">
      {Children.map(children, child => (
          child.type !== Cell ? <Cell size={size}>{child}</Cell> : cloneElement(child, {size}))
      )}
  </div>
);