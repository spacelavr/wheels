import React, {Component} from "react";
import {Link, withRouter} from 'react-router-dom';
import Storage from '../utils/storage';

class Header extends Component {

  handleLogout = () => {
    Storage.clear();
    this.props.history.push('/');
  };

  render() {
    return (
      <header className='d-flex justify-space-between'>
        <div className='d-flex justify-space-between'>
          <div><Link to='/'>wheels</Link></div>
          <div><Link to='/kit'>kit</Link></div>
          <div><Link to='/kit/list'>list</Link></div>
          <div><Link to='/kit/new'>new</Link></div>
        </div>

        <button
          className='btn-primary'
          onClick={this.handleLogout}
        >
          exit
        </button>
      </header>
    );
  }
}

export default withRouter(Header);
