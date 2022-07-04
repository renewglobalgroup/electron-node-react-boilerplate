import React, { Component } from 'react';
import { Api as api } from '../../modules/Api';
import './index.css';

class SampleTemplate extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    this.getTestApi()
  }

  async getTestApi() {
    api.get('/test')
        .then(({data}) => {
          this.setState({ msg: data });
        })
        .catch(err => console.error(err));
  }

  render() {
    return (
      <div id="sample-template">
        <h1>Electron React Boilerplate</h1>
        <p>Simple Electron app with React, NodeJS and Bootstrap</p>

        <span id="api-msg" className="small">{this.state.msg}</span>
      </div>
    );
  };
}
export default SampleTemplate;