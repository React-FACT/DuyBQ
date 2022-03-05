import React, { Component } from 'react';
import Table from './Table';
import './Dashboard.css';
import { getAll } from '../../apis/admin/admin.api';
class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      isLoading: false,
    };
  }
  async componentDidMount() {
    await getAll().then((res) => {
      this.setState({
        data: res['results'],
        isLoading: true,
      });
    });
  }
  render() {
    return <div>{this.state.isLoading === true ? <Table data={this.state.data} /> : <p>HAHAH</p>}</div>;
  }
}
export default Dashboard;
