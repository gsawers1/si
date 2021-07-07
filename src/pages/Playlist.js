import React, { Component } from 'react'
import { findDOMNode } from 'react-dom'
import wp1863739 from '../img/wp1863739.jpg'
import helmet from '../img/helmet.jpg'
import stadium from '../img/stadium.jpg'
import heisman from '../img/heisman.jpg'
import gm from '../img/gm.mp4'
import 'bulma/css/bulma.css'
import '../App.css'
import Particles from 'react-particles-js';
import Countdown from 'react-countdown-now';
import { Link } from 'react-router-dom'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'


class Playlist extends Component {

    render(){
        return (
        <div>
            <video muted autoPlay loop id="videobg">
                <source src={gm} type="video/mp4"/>
            </video>
            <div className="content">
                <div className="center has-text-centered">
                    
                </div>
            </div>

        </div>

    )}
    
}

export default Playlist
                
