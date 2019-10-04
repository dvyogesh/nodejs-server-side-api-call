import React, { Component } from 'react';
import UserMap from './containers/userData/UserMap';
import Loader from './components/Loader';
import './app.css';

export default class App extends Component {
  state = { userData: null };

  componentDidMount() {
    fetch('/api/getUseres')
      .then(res => res.json())
      .then(user => this.setState({ userData: user.data }));
  }

  render() {
    const { userData } = this.state;
    return userData ? <UserMap userData={userData}/> : <Loader />   
  }
}
