import React, { Component } from 'react'
import { findDOMNode } from 'react-dom'
import wp1863739 from '../img/wp1863739.jpg'
import helmet from '../img/helmet.jpg'
import stadium from '../img/stadium.jpg'
import heisman from '../img/heisman.jpg'
import filpability from '../img/flipability.jpg'
import agility from '../img/agility.jpg'
import chugability from '../img/chugability.jpg'
import tolerance from '../img/tolerance.jpg'
import stamina from '../img/stamina.jpg'
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
            <div className="hero-body is-centered has-text-centered">
                <div className="content-wrapper is-medium box">
                    <div className="columns is-centered has-text-centered">
                        <div className="column is-4">
                            <div className="feature">
                                <img src={filpability} alt="" data-aos="fade-up" data-aos-delay="100" data-aos-offset="200" data-aos-easing="ease-out-quart"/>
                                <h4 className="title is-6 is-tight is-light">Flipability</h4>
                                <p>Your skill in drinking games. How well can you flip, toss, and shoot your way to a title.</p>
                            </div>
                        </div>
                        <div className="column is-4">
                            <div className="feature">
                                <img src={agility} alt="" data-aos="fade-up" data-aos-delay="300" data-aos-offset="200" data-aos-easing="ease-out-quart"/>
                                <h4 className="title is-6 is-tight is-light ">Agility</h4>
                                <p>Your raw athleticism. From the fan favorite obstacle course to laying out on the die table, gotta be quick on your feet to get the W.</p>
                            </div>
                        </div>
                        <div className="column is-4">
                            <div className="feature">
                                <img src={chugability} alt="" data-aos="fade-up" data-aos-delay="500" data-aos-offset="200" data-aos-easing="ease-out-quart"/>
                                <h4 className="title is-6 is-tight is-light ">Chugability</h4>
                                <p>Some say its learned, some say its God given. Either way you gotta be able to put em down to keep up with the leaders and best.</p>
                            </div>
                        </div>
                    </div>
                    <div className="columns is-centered has-text-centered">
                        <div className="column is-4">
                            <div className="feature">
                                <img src={tolerance} alt="" data-aos="fade-up" data-aos-delay="700" data-aos-offset="200" data-aos-easing="ease-out-quart"/>
                                <h4 className="title is-6 is-tight is-light ">Tolerance</h4>
                                <p>Your ability to drink alcohol without becoming impaired. We didn't come here to drink 3 Zima's and go home. We came here to drink one too many and then yell at Sparty fans. </p>
                            </div>
                        </div>
                        <div className="column is-4">
                            <div className="feature">
                                <img src={stamina} alt="" data-aos="fade-up" data-aos-delay="900" data-aos-offset="200" data-aos-easing="ease-out-quart"/>
                                <h4 className="title is-6 is-tight is-light ">Stamina</h4>
                                <p>Your ability to drink all day without slowing down or losing skill. Game day is a marathon, not a sprint. You still gotta get into the stadium after you drink an unknown quantity of Fireball.</p>
                            </div>
                        </div>
                    </div>
                    <div className="columns is-centered has-text-centered">
                        <div className="column is-3">
                            <a target="_blank" href="https://forms.gle/kZ4w3FfCNx4eeMgb6">FILL OUT YOUR F.A.C.T.S</a>
                        </div>
                    </div>
                </div>
            </div>
        </section>


        </div>
    )}
    
}

export default Facts
