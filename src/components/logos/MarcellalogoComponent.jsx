import React, { Component } from 'react';
import redSquare from '../../resources/red_square (2).png';
import { Link, DirectLink, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'
import '../../CSS/logos/MarcellalogoComponent.css'


class OptimusMaximusLogo extends Component {
    state = {  }
    render() { 
        return ( 
            <React.Fragment>
                <div className = "Logo-container">
                    <h1 id="main-header">~ MARCELLA ~</h1>
                    <img className="redSquare" src={redSquare}></img>
                    <h2 id="artist-portfolio"> Artist Portfolio </h2>
                    <h2 id="greg-heading">Greg Marcy daGama</h2>
                    <h2 id="Om">神道 OM</h2>
                    <h2 id="crown">~ Ω ~</h2>
                    <div id="agent" style = {{textAlign : "center", fontFamily : 'Papyrus', fontSize : "2vw", marginTop : "40px", wordSpacing : "3px"}}><Link to="agent-link" spy={true} smooth={true} duration={500} >Agent | Publisher | Producer | Investor - - - - - &gt; Contact</Link></div>
                </div>
            </React.Fragment>
         );
    }
}
 
export default OptimusMaximusLogo;