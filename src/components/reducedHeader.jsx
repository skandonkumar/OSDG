import React, { Component } from 'react';
import { Link, NavLink } from "react-router-dom";
import redSquare from '../resources/red_square.png';
import '../CSS/reducedHeader.css';
import TOTM from '../resources/TOTM.png'


class ReducedHeader extends Component {
    
    render() { 
        return ( 
            <React.Fragment>
                <div style = {{border : "1px solid black", marginLeft : "100px", marginRight : "100px", marginTop : "0px", position:"fixed", textAlign : "center", verticalAlign : "middle"}}>
                    <nav id = "navbar" className="navbar navbar-expand-lg ">
                        <div className="collapse navbar-collapse flex-column ml-lg-0 ml-3" id="navbarNav">
                            <ul className="navbar-nav">
                                <li id = "nav-item" className="nav-item">
                                    <Link id = "nav-link" className="nav-link" to="/optimusMaximus">Optimus Maximus <span className="sr-only">(current)</span></Link>
                                </li>
                                <li id = "nav-item" className="nav-item">
                                    <Link id = "nav-link" className="nav-link" to="/shangriLaNation">Shangri-La-Nation</Link>
                                </li>
                                <li id = "nav-item" className="nav-item">
                                    <Link id = "nav-link" className="nav-link" to="/marcella">MARCELLA</Link>
                                </li>
                                <li id = "nav-item" className="nav-item">
                                    <Link id = "nav-link" className="nav-link" to="/parisToIstanbul">Paris To Istanbul</Link>
                                </li>
                                <li id = "nav-item" className="nav-item" id = "nav-item-last">
                                    <Link id = "nav-link" className="nav-link" to="/theSophiaDiaries">The Sofia Diaries</Link>
                                </li>
                            </ul>
                        </div>
                    </nav>
                    <img src={redSquare} style = {{height: "50px", width : "50px", marginLeft : "50px", float : "left"}}></img>
                    <Link style = {{textDecoration: "none", color : "black", fontFamily : "Papyrus", textAlign : "center", border : "1px solid black"}} to="/">ODYSSEY STUDIO daGAMA</Link>
                    <img src={TOTM} style = {{height : "150px", width : "150px", float : "right", paddingBottom : "80px"}}></img>
                    <nav id = "navbar" className="navbar navbar-expand-lg ">
                        <div className="collapse navbar-collapse flex-column ml-lg-0 ml-3" id="navbarNav">
                            <ul className="navbar-nav flex-row mb-2">
                                <li id = "nav-item" className="nav-item">
                                    <Link id = "nav-link" className="nav-link" to="/elSenor">El Señor</Link>
                                </li>
                                <li id = "nav-item" className="nav-item">
                                    <Link id = "nav-link" className="nav-link" to="/storiesMotherToldMe">Stories Mother Told Me</Link>
                                </li>
                                <li id = "nav-item" className="nav-item">
                                    <Link id = "nav-link" className="nav-link" to="/DiaryofYoungFrenchChef">Diary of Young French Chef</Link>
                                </li>
                                <li id = "nav-item" className="nav-item">
                                    <Link id = "nav-link" className="nav-link" to="/100thehardway">100 The Hard Way</Link>
                                </li>
                                <li id = "nav-item" className="nav-item" id = "nav-item-last">
                                    <Link id = "nav-link" className="nav-link" to="/TOTM">T.O.T.M.</Link>
                                </li> 
                            </ul>
                        </div> 
                    </nav>
                </div>
            </React.Fragment>
            
        )
    }
}
 
export default ReducedHeader;