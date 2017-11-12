import React, {Component} from 'react';
import Overlay from 'components/overlay';
import './image-hover.component.styl';

export class ImageHover extends Component {
    state = {
        shown: false
    };

    onClick = (e) => {
        this.setState(prevState => ({...prevState, shown: true}));
    };

    render() {
        const {url} = this.props;
        const {shown} = this.state;

        return (
            <div className="image-hover">
                <div
                    className="image-hover__content"
                    onClick={this.onClick}>
                    <div className="image-hover__main" style={{backgroundImage: `url(${url})`}}>&nbsp;</div>
                    <div className="image-hover__overlay"/>
                </div>
                {shown && (
                    <Overlay shown={shown}>
                        <img src={url} />
                    </Overlay>
                )}
            </div>
        )
    }
}
