import React, {Component} from "react";
import { Link, NavLink } from "react-router-dom";
import DrawerToggleButton from '../common/DrawerToggleButton';
import './homeNavBar.css'

class NavBar extends Component{
    
    state = {}

    render(){
        return (  
            <React.Fragment>
                <div className = "menuButton">
                    <DrawerToggleButton click = {this.props.drawerToggleClickHandler}/>
                </div>
                <nav id = "navbar" className="navbar navbar-expand-lg ">
                    <div className="collapse navbar-collapse flex-column ml-lg-0 ml-3" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item active">
                                <Link className="nav-link" to="/optimusMaximus">Optimus Maximus <span className="sr-only">(current)</span></Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/shangriLaNation">Shangri-La Nation</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/marcella">MARCELLA</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/parisToIstanbul">Paris To Istanbul</Link>
                            </li>
                            <li className="nav-item" id = "nav-item-last">
                                <Link className="nav-link" to="/theSophiaDiaries">The Sofia Diaries</Link>
                            </li>
                        </ul>
                        <ul className="navbar-nav flex-row mb-2">
                            <li className="nav-item">
                                <Link className="nav-link" to="/elSenor">El Señor</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/storiesMotherToldMe">Stories Mother Told Me</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/DiaryofYoungFrenchChef">Diary of Young French Chef</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/100thehardway">100 The Hard Way</Link>
                            </li>
                            <li className="nav-item" id = "nav-item-last">
                                <Link className="nav-link" to="/TOTM">T.O.T.M.</Link>
                            </li> 
                        </ul>
                    </div> 
                </nav>
            </React.Fragment>
        );
    } 
}
 
export default NavBar;
