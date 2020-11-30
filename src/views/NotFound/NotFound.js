import React from 'react';
import './NotFound.scss';
import { Link } from 'react-router-dom';

function NotFound() {
    return (
        <div className="NotFound">
            <h1>404</h1>
            <h1>Page Not Found</h1>
            <p>uh-oh! Nothing here..</p>
            <Link to='/' className="mt-0">← Back to home</Link>
        </div>
    );
}

export default NotFound;