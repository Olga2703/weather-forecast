import React, { Component } from 'react';

import './Header.scss';

import { ReactComponent as Logo } from '../../images/logo.svg';

export default class Header extends Component {

    render() {
        return (
            <div className='Header flex-1 d-flex flex-row justify-content-start align-items-center'>
                <a className='Header-Link ' href='# top'>
                    <Logo className='Header-Logo' />
                    <span className='Header-Title'>WeatherCheck</span>
                </a>
            </div>
        )
    }
}