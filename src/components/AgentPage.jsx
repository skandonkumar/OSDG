import smallHeader from '../resources/smallerHeader.jpg';
import '../CSS/agentPage.css'
import React, { Component } from 'react';
import { Element} from 'react-scroll'

class AgentPage extends Component {
    
    render() { 
        return ( 
            <Element style = {{textDecoration : "none"}} id='agent-link' name='agent-link'>

                <div style = {{textAlign : "center", margin : "auto", width : "85vw"}}>
                    <img style = {{width : "80%", height : "180px"}} src={smallHeader}></img>
                    <p className="lead" style = {{textAlign: "justify", fontFamily: "adobe-caslon-pro",paddingTop: "30px", paddingBottom : "30px", width :" 70%", margin : "auto"}}>Thank-you for your interest in Odyssey Studio da Gama and our ANTHOLOGICA portfolio. If you are an Agent, Publisher, Producer, or Investor interested in discussing representation, publishing, producing, or investing in any or all of OSDG’s portfolio works we welcome your professional interest.  Text or email us including any website link or other media identifying your professional interest. Reciprocally, we will forward to you a personal password allowing interior access on OSDG website to in-depth text, audio, and video material detailing what we believe we offer to and what we are looking for in professional representation. We sincerely thank you. </p>
                    <p style = {{fontFamily : "adobe-caslon-pro" }}>Greg Marcy da Gama <br/>Odyssey Studio dagama <br/>Isle of Crete, Greece</p>
                    <a href = "https://web.whatsapp.com/" target="_blank"><i style = {{backgroundColor : "#32CD32", fontSize : "30px"}} className="fa fa-whatsapp" aria-hidden="true"></i></a>
                    <p style = {{fontFamily : "adobe-caslon-pro" }}>WhatsApp - +30 6996227336</p>
                    <i style = {{ fontSize : "30px" }} className="fa fa-envelope"></i>
                    <p style = {{fontFamily : "adobe-caslon-pro" }}><a href="mailto:professionalinquiry@odysseystudiodama.com?Subject=Professional%20inquiry" target="_top">professionalinquiry@odysseystudiodama.com</a></p>
                </div>
            </Element>
        );
    }
}
 
export default AgentPage;