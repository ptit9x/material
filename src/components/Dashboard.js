import {Link} from 'react-router';
import React from 'react';

export default class Dashboard extends React.Component {
  render() {
    return (
        <div className="dashboard row">
          <div className="col s3">
            <ul className="collapsible" data-collapsible="accordion">
              <li>
                <div className="collapsible-header">
                  <span class="new badge">4</span>
                  <i className="material-icons">filter_drama</i>First</div>
                <div className="collapsible-body"><p>Lorem ipsum dolor sit amet.</p></div>
              </li>
              <li>
                <div className="collapsible-header">
                  <span className="badge">1</span>
                  <i className="material-icons">place</i>Second</div>
                <div className="collapsible-body"><p>Lorem ipsum dolor sit amet.</p></div>
              </li>
            </ul>
          </div>
          <div className="col s3">
            <ul className="collection">
              <li className="collection-item avatar">
                <img src="images/yuna.jpg" alt="" className="circle" />
                <span className="title">Title</span>
                <p>First Line </p>
                <a href="#!" className="secondary-content"><i className="material-icons">grade</i></a>
              </li>
              <li className="collection-item avatar">
                <i className="material-icons circle">folder</i>
                <span className="title">Title</span>
                <p>First Line </p>
                <a href="#!" className="secondary-content"><i className="material-icons">grade</i></a>
              </li>
              <li className="collection-item avatar">
                <i className="material-icons circle green">insert_chart</i>
                <span className="title">Title</span>
                <p>First Line</p>
                <a href="#!" className="secondary-content"><i className="material-icons">grade</i></a>
              </li>
              <li className="collection-item avatar">
                <i className="material-icons circle red">play_arrow</i>
                <span className="title">Title</span>
                <p>First Line </p>
                <a href="#!" className="secondary-content"><i className="material-icons">grade</i></a>
              </li>
            </ul>
          </div>
          <div className="col s6">

          </div>
        </div>
    );
  }
}
