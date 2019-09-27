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


class Schedule extends Component {
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
                                <Link className="navbar-item is-active" to="/schedule/">Schedule </Link>
                                <Link className="navbar-item" to="/rules/">Rules</Link>
                            </div>
                        </div>
                    </div>
              </header>
            </div>
            <div>
                <Particles className='particles' params={{
                        "particles": {
                            "number": {
                                "value": 160,
                                "density": {
                                    "enable": false
                                }
                            },
                            "size": {
                                "value": 8,
                                "random": true
                            },
                            "move": {
                                "direction": "bottom",
                                "out_mode": "out"
                            },
                            "line_linked": {
                                "enable": false
                            }
                        },
                    }} />
            </div>
            <div className="hero-body">
                <Countdown date={new Date('2019-10-05T12:00:00')} renderer={timer} />
            </div>
        </section>

        <section className="section is-transparent is-relative">
            <div className="container">

                <div className="content-wrapper is-medium">
                    <div className="columns is-vcentered has-text-centered">
                        <div className="column is-4">
                            <div className="feature">
                                <img src={helmet} alt="" data-aos="fade-up" data-aos-delay="100" data-aos-offset="200" data-aos-easing="ease-out-quart"/>
                                <h4 className="title is-6 is-tight is-light">Compete</h4>
                                <p>Fight to be a champion of the west. Seperate yourself from the Towels.</p>
                            </div>
                        </div>
                        <div className="column is-4">
                            <div className="feature">
                                <img src={stadium} alt="" data-aos="fade-up" data-aos-delay="300" data-aos-offset="200" data-aos-easing="ease-out-quart"/>
                                <h4 className="title is-6 is-tight is-light ">Drink</h4>
                                <p>We ain't in California anymore. It's cold here, and we got plenty of Fireball.</p>
                            </div>
                        </div>
                        <div className="column is-4">
                            <div className="feature">
                                <img src={heisman} alt="" data-aos="fade-up" data-aos-delay="500" data-aos-offset="200" data-aos-easing="ease-out-quart"/>
                                <h4 className="title is-6 is-tight is-light ">Win</h4>
                                <p>Win a ticket to the Big House. Join 110,000 of your closest friends. Pass out in a bar.</p>
                            </div>
                        </div>
                    </div>

                </div>

            </div>
        </section>
        </div>
    )}
    
}

export default Schedule
