import React from 'react';
import axios from 'axios';
import {Link} from 'react-router';

export default class IncomingPhone extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      incomingphones: []
    }
  }

  componentDidMount() {
    const domain = process.env.DOMAIN_SERVICES ||  `https://morephoneservices.herokuapp.com`;
    axios.get(`${domain}/api/availables`)
      .then(res => {
        const incomingphones = res.data;
        // const posts = res.data.map(obj => obj.friendlyName);
        this.setState({ incomingphones });
      });
  }

  render() {
    return (
      <div className="collection">
        <h4 className="collection-header">First Names</h4>
        <a href="#!" className="collection-item active">
          <span className="btn btn-floating">aa</span>
           (0167) 453-9633
          <span className="new teal badge">4</span>
        </a>
        {
          this.state.incomingphones.map(incoming =>
            <a href={`/dashboard/` + incoming.phoneNumber} className="collection-item">
              <span className="btn btn-floating">{incoming.isoCountry}</span>
              {incoming.friendlyName}
            </a>)
        }
      </div>
    );
  }
}
