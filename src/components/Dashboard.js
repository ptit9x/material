// import {Link} from 'react-router';
import React from 'react'
import IncomingPhone from '../parts/IncomingPhone'
import BoxTabs from '../parts/BoxTabs'

export default class Dashboard extends React.Component {

  render() {
    return (
        <div className="dashboard row">
          <div className="incoming_phone">
            <IncomingPhone />
          </div>
          <div className="box_tabs">
            <BoxTabs />
          </div>
          <div className="content">
            this is a content
          </div>
        </div>
    );
  }
}
