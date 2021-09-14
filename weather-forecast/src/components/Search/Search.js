import React, { Component } from 'react';

import cn from 'classnames';
import PropTypes from 'prop-types';
import {Label, Input, FormGroup} from 'reactstrap';

import './Search.scss';

export default class Search extends Component {
    
    static propTypes = {
        type: PropTypes.oneOf(['text','textarea']),
        name: PropTypes.string,
        label: PropTypes.string,
        value: PropTypes.string,
        className: PropTypes.string,
        placeholder: PropTypes.string,
        onChange: PropTypes.func
    }

    static defaultProps = {
        type: 'text',
        value: '',
        onChange: function () {}
    }

    onChange = e => {
        const value = e.target.value;
        const { name, onChange: cb } = this.props;
        cb(name, value);
    }

    render () {
        const {
            type,
            name,
            label,
            value,
            className,
            placeholder
        } = this.props;

        return (
            <FormGroup className={cn('Search', className)}>
                {label ? (
                    <Label className='Search-Label'>
                      {label}
                    </Label>
                ) : null}
                <Input
                        type={type}
                        name={name}
                        value={value}
                        placeholder={placeholder}
                        className='Search-Input'
                        onChange={this.onChange}
                />
            </FormGroup>
        )
    }
}