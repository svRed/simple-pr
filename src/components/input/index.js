import React, {Component, PropTypes} from 'react';
import classNames from 'classnames';
import './input.component.styl';

export class Input extends Component {
    static defaultProps = {
        onChange: () => void(0),
        value: '',
        validate: false
    };

    constructor(props) {
       super(props);

       this.state = {
           value: props.value
       };
    }

    onChange = (e) => {
        this.props.onChange(e.target);
        this.setState({value: e.target.value});
    };

    render() {
        const {type, label, required, validate} = this.props;
        const value = this.state.value.trim();

        const inputClasses = classNames('input-group__input', {
            'input-group__input_required': required && !value && validate
        });
        const labelClasses = classNames('input-group__label', {
            'input-group__label_required': required && !value && validate
        });

        return (
            <div className="input-group">
                <div className={labelClasses}>{label}</div>
                <input
                    onChange={this.onChange}
                    className={inputClasses}
                    type={type}
                />
            </div>
        );
    }
}