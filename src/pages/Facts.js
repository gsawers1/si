import React, { Component } from 'react'
import { findDOMNode } from 'react-dom'
import wp1863739 from '../img/wp1863739.jpg'
import helmet from '../img/helmet.jpg'
import stadium from '../img/stadium.jpg'
import heisman from '../img/heisman.jpg'
import 'bulma/css/bulma.css'
import '../App.css'
import Particles from 'react-particles-js';
import Countdown from 'react-countdown-now';
import { Link } from 'react-router-dom'
import { Router, Route, Switch } from 'react-router-dom'


class Facts extends Component {

    render(){
        const timer = (props) =>{
            let {
                days,
                hours,
                minutes,
                seconds
            } = props.formatted
            return(
                <div className="container has-text-centered">
                  <h1 className="title is-size-1 timer has-text-warning has-text-weight-bold is-family-monospace">
                    {days} : {hours} : {minutes} : {seconds}
                  </h1>
                </div>   
            )
        }
        return (
        <div >
          <section className="hero is-fullheight bg-img">
            <div className="hero-head">
                <header className="navbar is-transparent">
                    <div className="container">
                        <div className="navbar-brand">
                            <span className="navbar-burger burger" data-target="navbarMenuHeroC">
                                <span></span>
                                <span></span>
                                <span></span>
                            </span>
                        </div>
                        <div id="navbarMenuHeroC" className="navbar-menu">
                            <div className="navbar-end">
                                <Link className="navbar-item" to="/"> Home </Link>
                                <Link className="navbar-item is-active" to="/facts/">F.A.C.T.S </Link>
                                <Link className="navbar-item" to="/Schedule/">Schedule </Link>
                                <Link className="navbar-item" to="/Rules/">Rules</Link>
                            </div>
                        </div>
                    </div>
              </header>
                <div className="columns is-mobile is-centered">
                    <div className="column is-2">
                        <p className="title has-text-light is-size-1"> F.A.C.T.S.</p>
                    </div>
                </div>
            </div>
            <div className="hero-body columns is-centered has-text-centered">
                <div className="column is-3">
                     <div className="box is-link">
                        <a target="_blank" href="https://forms.gle/kZ4w3FfCNx4eeMgb6">FILL OUT YOUR F.A.C.T.S</a>
                     </div>
                 </div>
            </div>
        </section>


        </div>
    )}
    
}

export default Facts
