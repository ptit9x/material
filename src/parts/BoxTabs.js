import React from 'react'
import TabMessagers from '../parts/TabMessagers'
import TabVoices from '../parts/TabVoices'

export default class BoxTabs extends React.Component {

  render() {
    return (
      <div className="row">
        <div className="col s12">
          <ul className="tabs">
            <li className="tab col s6"><a className="active" href="#test1">Messager</a></li>
            <li className="tab col s6"><a href="#test2">Voice</a></li>
          </ul>
          <a className="avatar">
            <span className="btn-floating"><i className="material-icons">add</i></span>
            <span className="title">New Conversation</span>
          </a>
        </div>
        <div id="test1" className="col s12">
          <TabMessagers />
        </div>
        <div id="test2" className="col s12">
          <TabVoices />
        </div>
      </div>
    );
  }
}
