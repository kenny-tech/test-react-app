import React from 'react';
import PropTypes from 'prop-types';

const Items = (props) => {
    const { items = [] } = props;

    if(!items.length) {
        // No items on the list, render an empty message
        return <span>No items in list</span>;
    }

    if(items.length === 1) {
        // One item in the list, render a span
        return <span>{items[0]}</span>;
    }

    // Multiple items on the list, render a list
    return (
        <ul>
            {items.map(item => <li key={item}>{item}</li>)}
        </ul>
    );
}

Items.propTypes = {
    items: PropTypes.array,
}

Items.defaultProps = {
    items: [],
}

export default Items;