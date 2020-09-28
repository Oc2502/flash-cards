import React from 'react';
import {Link} from 'react-router-dom';


const Header = () => {

    return(
        <div className='header'>
            <Link to="/flash-card">
                flash
            </Link>
            <Link to="/manage-card">
                manage
            </Link>
        </div>
    );
};

export default Header;