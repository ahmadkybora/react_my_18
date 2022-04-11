import React, { useState, useEffect } from 'react';

const Logout = (props) => {
    useEffect(() => {
        props.onLogout();
    });

    return <div></div>
}

export default Logout