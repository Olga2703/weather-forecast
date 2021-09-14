import React from 'react';

import Icon from './icons.svg';

const Icons = (props) => (
    <svg className = { `Icon Icon-${props.name}` }>
        <use xlinkHref = { `${Icon}#${props.name}` } />
    </svg>
);

export default Icons;