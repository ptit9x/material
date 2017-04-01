import React from 'react';
export default class TabMessagers extends React.Component {
  render() {
    return (
      <div className="">
        <ul className="collection">
          <li className="collection-item avatar">
            <img src="images/yuna.jpg" alt="" className="circle" />
            <span className="title">Title</span>
            <p>First Line Second Line
            </p>
            <a href="#" className="secondary-content">
              <i className="material-icons">grade</i>
            </a>
          </li>
          <li className="collection-item avatar">
            <img src="images/yuna.jpg" alt="" className="circle" />
            <span className="title">Title</span>
            <p>First Line Second Line
            </p>
            <a href="#" className="secondary-content">
              <i className="material-icons">grade</i>
            </a>
          </li>
          <li className="collection-item avatar">
            <img src="images/yuna.jpg" alt="" className="circle" />
            <span className="title">Title</span>
            <p>First Line Second Line
            </p>
            <a href="#" className="secondary-content">
              <i className="material-icons">grade</i>
            </a>
          </li>
        </ul>
      </div>
    );
  }
}
