import React, { Component } from 'react';
import { Container, Row, Table } from 'react-bootstrap';
import ModalDashBoard from './Modal';
import moment from 'moment';
class _Table extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dataTable: this.props.data,
      isShow: false,
      actionName: '',
    };
    this.handleShow.bind(this);
    this.handleHide.bind(this);
  }

  handleShow = (name) => {
    this.setState({ ...this.state, isShow: true, actionName: name });
  };
  handleHide = () => {
    this.setState({ ...this.state, isShow: false });
  };

  render() {
    return (
      <Container>
        <Row>
          <Table striped bordered hover id='table-dashboard' className='mt-4'>
            <thead id='table-header'>
              <tr id='thead-tr'>
                <th rowSpan='2' className='header'>
                  STT
                </th>
                <th rowSpan='2' className='header'>
                  UserID
                </th>
                <th rowSpan='2' className='header'>
                  FullName
                </th>
                <th rowSpan='2' className='header'>
                  Email
                </th>
                <th rowSpan='2' className='header'>
                  BirthDate
                </th>
                <th colSpan='2' className='header' id='th1'>
                  Activity Day
                </th>
                <th rowSpan='2' className='header'>
                  Admin
                </th>
                <th rowSpan='2' className='header'>
                  Status
                </th>
                <th colSpan='3' rowSpan='2' className='header'>
                  <button className='btn btn-success' title='Add User' onClick={() => this.handleShow('Add User')}>
                    ADD
                  </button>
                </th>
              </tr>
              <tr>
                <td className='header'>First login day</td>
                <td className='header'>Last login day</td>
              </tr>
            </thead>
            <tbody id='table-body'>
              {this.state.dataTable.map((value, index) => {
                console.log(value);
                return (
                  <tr key={index}>
                    <td>{index + 1}</td>
                    <td>{value['id']}</td>
                    <td>{value['username']}</td>
                    <td>{value['email']}</td>
                    <td>{moment(value['birthDate']).format('DD-MM-YYYY')}</td>
                    <td>{moment(value['firstLogin']).format('DD-MM-YYYY')}</td>
                    <td>{moment(value['lastLogin']).format('DD-MM-YYYY')}</td>
                    <td>{value['isAdmin']}</td>
                    <td>{value['isActive']}</td>
                    <td>
                      <button onClick={(e) => console.log(e)} className='btn btn-success'>
                        V
                      </button>
                    </td>
                    <td>
                      <button className='btn btn-danger'> E </button>
                    </td>
                    <td>
                      <button className='btn btn-warning'> D </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </Table>
          <ModalDashBoard show={this.state.isShow} action={this.state.actionName} hide={this.handleHide} />
        </Row>
      </Container>
    );
  }
}
export default _Table;
