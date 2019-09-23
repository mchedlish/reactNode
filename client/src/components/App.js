import React, { Component } from 'react'
import {BrowserRouter, Route}from 'react-router-dom'
import Header from './Header';
import {connect} from 'react-redux';
import * as actions from '../actions'

const Dashboard = ()=><h2>Dashboard</h2>
const SurwayNew = ()=><h2>SurwayNew</h2>
const Landing = ()=><h2>Landing</h2>

class App extends Component {

componentDidMount () {
this.props.fetchUser();

}

    render() {
        return (
            <div className="container">
            <BrowserRouter>
            <div>
            <Header/>
            <Route exact={true} path="/" component={Landing}/>
            <Route exact path="/surways" component={Dashboard}/>
            <Route path="/surways/new" component={SurwayNew}/>
            </div>
            </BrowserRouter>
        </div>
        )
    }
}

export default connect(null, actions)(App);





