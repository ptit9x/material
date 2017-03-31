import {Link} from 'react-router';
import React from 'react';
import axios from 'axios';

export default class Dashboard extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      posts: []
    }
  }

  componentDidMount() {
    axios.get(`https://morephoneservices.herokuapp.com/api/messagers/+17606215500`)
      .then(res => {
        const posts = res.data.map(obj => obj);
        this.setState({ posts });
      });
  }

  render() {
    return (
        <div className="dashboard row">
          <div className="col l3 m3 s6">
            <ul className="table-of-contents">
              <li><a href="#" className="active">Download</a></li>
              {this.state.posts.map(post =>
                <li <a href="#" key={post.sid}>{post.body}</a></li>
              )}
            </ul>
          </div>
          <div className="col l3 m3 s6">
            <div className="row">
              <div className="col s12">
                <ul className="tabs">
                  <li className="tab col s6"><a href="#test1">Messager</a></li>
                  <li className="tab col s6"><a className="active" href="#test2">Voice</a></li>
                </ul>
                <a className="btn-floating">
                  <i className="material-icons">add</i>
                </a>
                Buy a phone
              </div>
              <div id="test1" className="col s12">Test 1</div>
              <div id="test2" className="col s12">Test 2</div>
            </div>
          </div>
          <div className="col l6 m6 s12">
            chat area
          </div>
        </div>
    );
  }
}
