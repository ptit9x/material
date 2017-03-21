import React from 'react';

export default class Header extends React.Component {
  render() {
    return (
      <nav className="teal" role="navigation">
        <div className="navbar-fixed container">
          <a id="logo-container" href="#" className="brand-logo">MORE PHONE</a>
          <ul className="right hide-on-med-and-down">
            <li className="active"><a href="/">Home</a></li>
            <li><a href="/dashboard">Dashboard</a></li>
            <li><a href="/">About</a></li>
            <li><a href="/">Contact</a></li>
          </ul>

          <ul id="nav-mobile" className="side-nav">
            <li className="active"><a href="#">Home</a></li>
            <li><a href="/dashboard">Dashboard</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
          <a href="#" data-activates="nav-mobile" className="button-collapse"><i className="material-icons">menu</i></a>
        </div>
      </nav>
    );
  }
}
