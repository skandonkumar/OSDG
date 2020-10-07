import React, { Component } from 'react';

import './DrawerToggleButton.css';

const drawerToggleButton = props =>(
    <button className = "toggle-button" onClick = {props.click}>
        <i className="fa fa-bars"></i>
    </button>
);

export default drawerToggleButton;