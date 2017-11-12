import React, {Component} from 'react';
import classNames from 'classnames';

import './button.component.styl';

export const Type = {
  MAIN: 'button_main'
};

export class Button extends Component {
    static defaultProps = {
        disabled: false
    };

    render() {
        const {
            title,
            type,
            disabled,
            onClick
        } = this.props;
        const classes = classNames('button', {
            [type]: type
        });

        return (
            <button className={classes} {...{onClick, disabled}}>
                {title}
            </button>
        );
    }
}
