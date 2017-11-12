import React, {Component, Children} from 'react';
import classNames from 'classnames';
import BlockGroup, {BlockItem, Direction, Justify, Indent} from 'components/block-group';
import Button, {Type} from 'components/button';

import './form.component.styl';

export class Form extends Component {
    static defaultProps = {
        buttonTitle: 'Send',
        buttonType: Type.MAIN
    };

    onClick = () => alert('Submited');

    onInputsChange = () => {
        // TODO: add action for required fields checking
    };

    render() {
        const {buttonTitle, buttonType, half} = this.props;
        const classes = classNames('form', {
            'form_half': half
        });

        return (
            <div className={classes}>
                <BlockGroup
                    direction={Direction.COLUMN}
                    indent={Indent.MIDDLE}>
                    {Children.map(this.props.children, child => (
                        <BlockItem flex={false} full>
                            {child}
                        </BlockItem>
                    ))}
                    <BlockItem justify={Justify.START}>
                        <Button
                            type={buttonType}
                            title={buttonTitle}
                            onClick={this.onClick}
                        />
                    </BlockItem>
                </BlockGroup>
            </div>
        );
    }
}
