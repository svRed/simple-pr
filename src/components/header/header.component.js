import React, {Component} from 'react';
import classNames from 'classnames';
import {Link} from 'react-router-dom';
import {Logo} from 'components/logo';
import './header.component.styl';

const initialActiveLink = 'home';

const HeaderItem = ({children}) => <li className="header__item">{children}</li>;

const HeaderLink = ({to, onClick, title, activeId}) => {
    const id = to.slice(1) ? to.slice(1) : initialActiveLink;
    const classes = classNames('header__link', {
        'header__link_active': activeId === id
    });

    return (
        <Link
            className={classes}
            to={to}
            onClick={() => onClick(id)}>
            {title}
        </Link>
    );
};

export class Header extends Component {
    state = {
        activeId: initialActiveLink
    };

    onClick = activeId => this.setState({activeId});

    render() {
        const {activeId} = this.state;

        return (
            <ul className='header'>
                <HeaderItem>
                    <HeaderLink onClick={this.onClick} activeId={activeId} title='Home' to="/"/>
                </HeaderItem>

                <HeaderItem>
                    <HeaderLink onClick={this.onClick} activeId={activeId} title='Info' to="/info"/>
                </HeaderItem>

                <HeaderItem><Logo/></HeaderItem>

                <HeaderItem>
                    <HeaderLink onClick={this.onClick} activeId={activeId} title='Photos' to="/gallery"/>
                </HeaderItem>

                <HeaderItem>
                    <HeaderLink onClick={this.onClick} activeId={activeId} title='FAQ' to="faq"/>
                </HeaderItem>
            </ul>
        );
    }
};
