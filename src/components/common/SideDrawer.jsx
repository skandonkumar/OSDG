import React from 'react';
import { Link, NavLink } from "react-router-dom";
import './SideDrawer.css'

const sideDrawer = props =>(
    <React.Fragment>
        <div className = "backdrop">
            <ul>
                <li>
                    <Link className="nav-link" to="/optimusMaximus" style = {{fontFamily : "Papyrus"}}>Optimus Maximus <span className="sr-only">(current)</span></Link>
                </li>
                <li>
                    <Link className="nav-link" to="/shangriLaNation" style = {{fontFamily : "Papyrus"}}>Shangri-La-Nation</Link>
                </li>
                <li>
                    <Link className="nav-link" to="/marcella" style = {{fontFamily : "Papyrus"}}>MARCELLA</Link>
                </li>
                <li>
                    <Link className="nav-link" to="/parisToIstanbul" style = {{fontFamily : "Papyrus"}}>Paris To Istanbul</Link>
                </li>
                <li>
                    <Link className="nav-link" to="/theSophiaDiaries" style = {{fontFamily : "Papyrus"}}>The Sofia Diaries</Link>
                </li>
                <li>
                    <Link className="nav-link" to="/elSenor" style = {{fontFamily : "Papyrus"}}>El Señor</Link>
                </li>
                <li>
                    <Link className="nav-link" to="/storiesMotherToldMe" style = {{fontFamily : "Papyrus"}}>Stories Mother Told Me</Link>
                </li>
                <li>
                    <Link className="nav-link" to="/DiaryofYoungFrenchChef" style = {{fontFamily : "Papyrus"}}>Diary of Young French Chef</Link>
                </li>
                <li>
                    <Link className="nav-link" to="/100thehardway" style = {{fontFamily : "Papyrus"}}>100 The Hard Way</Link>
                </li>
                <li id = "nav-item-last">
                    <Link className="nav-link" to="/TOTM" style = {{fontFamily : "Papyrus"}}>T.O.T.M.</Link>
                </li> 
            </ul>
        </div>
     </React.Fragment>
)

export default sideDrawer;