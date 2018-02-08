import React, { Component } from 'react';

class Nav extends Component {
    render() {
        return (
            <div class='nav-bar'>
             <span class="contact-link contact-link-email">
                <a href="mailto:johnluiscastillo@gmail.com">Email</a>
             </span>
             <span class="contact-link contact-link-linkedin">
                <a href="https://www.linkedin.com/in/john-castillo-604b2b156/">LinkedIn</a>
             </span>
             <span class="contact-link contact-link-github">
                <a href="https://github.com/JohnLCastillo">GitHub</a>
             </span>
        </div>
        );
    }
}

export default Nav;