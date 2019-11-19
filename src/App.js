import React, { Component } from 'react'
import { HashRouter as Router, Route, Switch } from 'react-router-dom'
import Home from './pages/Home'
import Facts from './pages/Facts'
import Schedule from './pages/Schedule'
import Rules from './pages/Rules'
import 'bulma/css/bulma.css'
import 'aos/dist/aos.css'

class App extends Component {
    constructor(props) {
        super(props)
    }
    componentDidMount(){

    }

    render() {
        return (
           <Router>
                <Route path="/" exact component={Home} />
                <Route path="/facts/" component={Facts} />
                <Route path="/schedule/" component={Schedule} />
                <Route path="/rules/" component={Rules} />
            </Router>
        )
    }
}

const Loading = () => {
    return (
        <div id='loader' className='text-mlb-grey-600'>
            <i id='spinner' className='fa fa-2x fa-spinner fa-pulse'></i>
        </div>
    )
}


export default App