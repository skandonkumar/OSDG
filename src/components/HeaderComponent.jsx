import React, { Component } from 'react';
import '../CSS/HeaderComponent.css'
import { Link, NavLink } from "react-router-dom";


class HeaderComponent extends Component {
    render() { 
        return ( 
            <React.Fragment>
                <Link id = "Header" to="/"><h1 id="Header1">ODYSSEY STUDIO daGAMA</h1></Link>
            </React.Fragment>
            
         );
    }
}
 
export default HeaderComponent;