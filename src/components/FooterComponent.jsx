import React, { Component } from 'react';
import '../CSS/FooterComponent.css'
import AgentPage from './AgentPage';

class FooterComponent extends Component {
    render() { 
        return ( 
            <div className = "Footer-container">
                <AgentPage></AgentPage>
                <footer id="footer">
                    Artist Proof V.1.0 &copy; MMIX TEXAS SEVEN, LLC / Web Developer - Skanda Kumar / Web Design - Greg Marcy Da Gama
                </footer>
            </div>
                
        );
    }
}
 
export default FooterComponent;