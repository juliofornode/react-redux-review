import React from 'react';

const HeaderComponent = () => {
    return (
        <div>
            <ul class="nav nav-pills">
                <li role="presentation" class="active"><a href="/one">One</a></li>
                <li role="presentation"><a href="#">Profile</a></li>
                <li role="presentation"><a href="#">Messages</a></li>
            </ul>
        </div>
    );
};

export default HeaderComponent;