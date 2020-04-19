import React from 'react';
import logo from '../../assets/img/tray-io-logo.png';
import { COMPANY_SHORT } from '../../constants';

const Header = () => {
    return (
        <header className="header">
            <div className="header-container">
                <img
                    data-test="logo"
                    src={logo}
                    alt={COMPANY_SHORT}
                    className="logo"
                />
            </div>
        </header>
    );
};

export default Header;
