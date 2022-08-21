import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
    return (
        <div>
            <h2>Welcome to tshirt house</h2>
            <nav>
                <Link to="/home">Home</Link>
                <Link to="/orderreview">Order Review</Link>
                {/* home and order review btn ke inspact korle bujha jabe era ashole <a></a> but Link er vitore ache  */}
            </nav>
        </div>
    );
};

export default Header;