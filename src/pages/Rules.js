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
import  Facts  from '../pages/Facts'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'


class Rules extends Component {
    constructor(props){
        super(props)
        this.store = props.store
    }

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
          <section className="hero is-fullheight-with-navbar bg-img" style={{height:"10%"}}>
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
                                <Link className="navbar-item" to="/facts/">F.A.C.T.S </Link>
                                <Link className="navbar-item" to="/schedule/">Schedule </Link>
                                <Link className="navbar-item is-active" to="/rules/">Rules</Link>
                            </div>
                        </div>
                    </div>
              </header>
            </div>
            <div className="hero-body is-centered has-text-centered columns">
                <div className="column is-6 box ">
                    <a target="_blank" href="https://docs.google.com/document/d/1XHMeTaP3hZDiRHUM4HU2LNW141vNu8TMvSYpVCoJpjI/edit?usp=sharing">Rules and Guidelines</a>
                </div>
            </div>

        </section>
        </div>
    )}
    
}

export default Rules
