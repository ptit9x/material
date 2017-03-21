import {Link} from 'react-router';
import React from 'react';

export default class Dashboard extends React.Component {
  render() {
    return (
        <div className="dashboard">
          <div className="sidebar">sidebar</div>
          <div className="content"> content</div>
        </div>
    );
  }
}
