import React from 'react';
import PropTypes from 'prop-types';


const Header = (props) => {
    return (
        <div>
            <h1 style={headingStyle}>{props.titleName}</h1>
        </div>
    )
}

Header.defaultProps = {
    titleName: "Appels en Pere App"
}

Header.PropTypes = {
    branding: PropTypes.string.isRequired
}

const headingStyle = {
    color: 'green',
    fontSize: '50px'
}
export default Header;