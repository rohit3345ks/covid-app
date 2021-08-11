import React from 'react';
import { Link } from 'react-router-dom';
import { ROUTES } from '../../Shared';
const PageNotFound = () => {
    return (
        <div>
            Page Not Found
            <Link to={ROUTES.HOME}>Return to the Website</Link>
        </div>
    )
}

export default PageNotFound;
