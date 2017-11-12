import React from 'react';
import classNames from 'classnames';
import './title.component.styl';

export const Title = ({content, align}) => (
  <div className={classNames('title', {[`title_${align}`]: align})}>
      {content}
  </div>
);