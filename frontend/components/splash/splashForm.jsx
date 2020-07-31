import React from 'react';

import {Link} from 'react-router-dom';

const splashForm = () => (
    <div className = "splash-form">
        <h1>Welcome to the Ferly crew</h1>
        <h3>I'm really excited about the opportunity</h3>
        <a href="https://patricksbrown1992.github.io/portfolio/" target="_blank">Portfolio</a>
        <a href="https://www.linkedin.com/in/patricksbrown1992/" target="_blank">LinkedIn</a>
        <a href="https://github.com/patricksbrown1992" target="_blank">Github</a>
        <Link to='/login'>Sign In</Link>
        <Link to='/signup'>Sign Up</Link>
    </div>
);

export default splashForm;