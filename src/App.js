import React, { Component } from 'react';
import { Route, Redirect, Switch } from "react-router-dom";
import OptimusMaximus from './components/OptimusMaximus';
import ShangriLaNation from './components/ShangriLaNation';
import Marcella from './components/Marcella';
import ParisToIstanbul from './components/ParisToIstanbul';
import TheSophiaDiaries from './components/TheSophiaDiaries';
import ElSenor from './components/ElSenor';
import TOTM from './components/TOTM';
import NotFound from './components/NotFound';
import Anthologica from './components/Anthologica';
import HomeNavBar from './components/common/homeNavBar';
import SideDrawer from './components/common/SideDrawer';
import './App.css';
import Footer from './components/FooterComponent';
import Header from './components/HeaderComponent';
import Item8 from './components/Item8';
import storiesMotherToldMe from "./components/storiesMotherToldMe";
import thehardway from "./components/thehardway";
import DiaryofYoungFrenchChef from "./components/DiaryofYoungFrenchChef"


class App extends Component {
  state = { 
      sideDrawerOpen : false
  }

  drawerToggleClickHandler = ()=>{
      this.setState(()=>{
          return {sideDrawerOpen : !this.state.sideDrawerOpen}
      } );
  }

  hideSideDrawer = ()=>{
      this.setState(()=>{
          return {sideDrawerOpen : false}
      } );
  }
  render() {
    let sideDrawer;
    if(this.state.sideDrawerOpen){
        sideDrawer = <SideDrawer/>
    } 
    return (
      <div className = "app-container">
        <div className = "inner-container">
          <Header></Header>
          <HomeNavBar drawerToggleClickHandler ={this.drawerToggleClickHandler}/>
          {sideDrawer}
        </div>
        <main className="main-container">
          <Switch>
            <Route path="/anthalogica" component={Anthologica} />
            <Route path="/optimusMaximus" component={OptimusMaximus} />
            <Route path="/shangriLaNation" component={ShangriLaNation} />
            <Route path="/marcella" component={Marcella} />
            <Route path="/parisToIstanbul" component={ParisToIstanbul} />
            <Route path="/theSophiaDiaries" component={TheSophiaDiaries} />
            <Route path="/elSenor" component={ElSenor} />
            <Route path="/TOTM" component={TOTM} />
            <Route path="/Item8" component={Item8} />
            <Route path="/storiesMotherToldMe" component={storiesMotherToldMe} />
            <Route path="/100thehardway" component = {thehardway} />
            <Route path="/DiaryofYoungFrenchChef" component = {DiaryofYoungFrenchChef} />
            <Route path="/not-found" component={NotFound} />
            <Redirect from="/" exact to="/anthalogica" />
            <Redirect to="/not-found" />
          </Switch>
        </main>
        <Footer></Footer>
        
      </div>
      
    );
  }
}

export default App;
