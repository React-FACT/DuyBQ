import React, { Component } from 'react';
import moment from 'moment';
import ModalDashBoard from './ModalDashBoard';
import { Container, Row, Table } from 'react-bootstrap';
import { tableConstant, tbClassConstant } from '../constants/admin.constant';
import { iconConstant, classConstant, textEventConstant } from '../constants/global.constant';

class TableDashBoard extends Component {
   constructor(props) {
      super(props);
      this.state = {
         dataTable: this.props.data,
         isShow: false,
         actionName: '',
         userId: 0,
      };
   }

   handleShow = (name, usrId) => {
      this.setState({ ...this.state, isShow: true, actionName: name, userId: usrId });
   };
   handleHide = () => {
      this.setState({ ...this.state, isShow: false });
   };

   render() {
      const headerTable = (name, row, col) => {
         let element = <th className={tbClassConstant.classHeader}>{name}</th>;
         if (row > 0 && col >= 0) {
            element = (
               <th rowSpan={row} colSpan={col} className={tbClassConstant.classHeader}>
                  {name}
               </th>
            );
         }
         if (row === 0 && col > 0) {
            element = (
               <th colSpan={col} className={tbClassConstant.classHeader}>
                  {name}
               </th>
            );
         }
         return element;
      };

      return (
         <Container>
            <Row>
               <Table striped bordered hover id='table-dashboard' className={classConstant.CLASS_MT4}>
                  <thead id='table-header'>
                     <tr id='thead-tr'>
                        {headerTable(tableConstant.tbSTT, 2, 0)}
                        {headerTable(tableConstant.tbUserId, 2, 0)}
                        {headerTable(tableConstant.tbFullName, 2, 0)}
                        {headerTable(tableConstant.tbEmail, 2, 0)}
                        {headerTable(tableConstant.tbBirthDate, 2, 0)}
                        {headerTable(tableConstant.tbActivity, 0, 2)}
                        {headerTable(tableConstant.tbAdmin, 2, 0)}
                        {headerTable(tableConstant.tbStatus, 2, 0)}
                        <th colSpan='3' rowSpan='2' className={tbClassConstant.classHeader}>
                           <button
                              className={classConstant.CLASS_BTN_SUCCESS}
                              onClick={() => this.handleShow(textEventConstant.TXT_ADD_USER)}
                           >
                              {iconConstant.I_ADD}
                           </button>
                        </th>
                     </tr>
                     <tr>
                        {headerTable(tableConstant.tbFirstLogin)}
                        {headerTable(tableConstant.tbLastLogin)}
                     </tr>
                  </thead>
                  <tbody id='table-body'>
                     {this.state.dataTable.map((value, idx) => {
                        return (
                           <tr key={idx}>
                              <td>{idx + 1}</td>
                              <td>{value['id']}</td>
                              <td>{value['username']}</td>
                              <td>{value['email']}</td>
                              <td>{moment(value['birthDate']).format('DD-MM-YYYY')}</td>
                              <td>{moment(value['firstLogin']).format('DD-MM-YYYY')}</td>
                              <td>{moment(value['lastLogin']).format('DD-MM-YYYY')}</td>
                              <td>{value['isAdmin']}</td>
                              <td>{value['isActive']}</td>
                              <td>
                                 <button className={classConstant.CLASS_BTN_PRIMARY}>{iconConstant.I_DETAILS}</button>
                              </td>
                              <td>
                                 <button
                                    className={classConstant.CLASS_BTN_WARNING}
                                    onClick={(e) => this.handleShow(textEventConstant.TXT_UPDATE, value['id'])}
                                 >
                                    {iconConstant.I_UPDATE}
                                 </button>
                              </td>
                              <td>
                                 <button className={classConstant.CLASS_BTN_DANGER}>{iconConstant.I_DELETE}</button>
                              </td>
                           </tr>
                        );
                     })}
                  </tbody>
               </Table>
               <ModalDashBoard
                  show={this.state.isShow}
                  userId={this.state.userId}
                  action={this.state.actionName}
                  hide={this.handleHide}
               />
            </Row>
         </Container>
      );
   }
}
export default TableDashBoard;
