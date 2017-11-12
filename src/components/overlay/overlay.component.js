import React, {Component} from 'react';
import './overlay.component.styl';

export class Overlay extends Component {
    constructor(props) {
        super(props);

        this.state = {
            shown: props.shown
        };
    }

    componentDidMount() {
        window.addEventListener('click', this.onClickAway);
    }

    componentWillUnmount() {
        window.removeEventListener('click', this.onClickAway);
    }

    componentWillReceiveProps({shown}) {
        if (shown !== this.state.shown) {
            this.setState(prevState => ({...prevState, shown}));
        }
    }

    onClickAway = ({target}) => {
        if (this.overlay === target) {
            this.hide();
        }
    };

    hide = () => this.setState(prevState => ({...prevState, shown: false}));

    render() {
        const {children} = this.props;
        const {shown} = this.state;

        return shown ? (
            <div
                className="overlay"
                ref={overlay => this.overlay = overlay}>
                <div className="overlay__content">
                    <div className="overlay__close" onClick={this.hide}/>
                    {children}
                </div>
            </div>
        ) : null;
    }
}