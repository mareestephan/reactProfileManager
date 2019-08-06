import React from 'react';
import PropTypes from 'prop-types';


const Header = (props) => {
    const { titleName } = props;
    return (
        <nav className="navbar navbar-expand-sm navbar-dark bg-info mb-3 py-0">
            <div className="container">
                <a href="/" className="navbar-brand">
                    {titleName}</a>
                <div>
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item">
                            <a href="/" className="nav-link ">Home
                        </a>
                        </li>
                    </ul>
                </div>

            </div>
        </nav>
    )
}

Header.defaultProps = {
    titleName: "Appels en Pere App"
}

Header.PropTypes = {
    branding: PropTypes.string.isRequired
}


export default Header;