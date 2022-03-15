import React, { Component } from 'react';
import moment from 'moment';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getAll, create, update } from '../../apis/admin/admin.api';
import { tableConstant } from '../constants/admin.constant';
import { ActionTypes } from '../../redux/constants/ActionTypes';
import { Modal, Button, Form, Row, Col } from 'react-bootstrap';
import { actionGetAddress } from '../../redux/actions/address.Action';
import { actionGetAllUser, actionUpdateUser } from '../../redux/actions/admin.Action';
import { textEventConstant, classConstant } from '../constants/global.constant';
import { getCountry, getCityById, getDistrictById, getWardById } from '../../apis/address/address.api';

class ModalDashBoard extends Component {
   constructor(props) {
      super(props);
      this.state = {
         formData: {
            username: '',
            password: '',
            email: '',
            birthDate: moment(),
            firstName: '',
            lastName: '',
            isAdmin: 0,
            isActive: 0,
            phone: '',
            addressDes: '',
            note: '',
            countryId: 0,
            provinceId: 0,
            districtId: 0,
            wardId: 0,
         },
         msgErr: {
            msgEmail: '',
            msgUserName: '',
         },
      };
   }

   initState = () => {
      this.setState({
         formData: {
            username: '',
            password: '',
            email: '',
            birthDate: moment(),
            firstName: '',
            lastName: '',
            isAdmin: 0,
            isActive: 0,
            phone: '',
            addressDes: '',
            note: '',
            countryId: 0,
            provinceId: 0,
            districtId: 0,
            wardId: 0,
         },
         msgErr: {
            msgEmail: '',
            msgPassword: '',
            msgUserName: '',
            msgLastName: '',
         },
      });
   };

   async componentDidMount() {
      this.initState();
      await getCountry().then((res) => {
         this.props.getAddress(ActionTypes.GET_ALL_COUNTRY, res['results']);
      });
   }

   componentDidUpdate(previousProps, previousState) {
      if (previousProps.userId !== this.props.userId) {
         this.initState();
         this.getUserById(this.props.userId);
      }
   }

   getUserById = (usrId) => {
      let userById = this.props.users.dataUsers.filter((v) => v.id === usrId);
      if (userById.length > 0) {
         this.setState({ formData: { ...userById[0] } });
      }
   };

   hide() {
      this.props.hide(true);
   }

   optionAddress(data) {
      return data.map((value, index) => (
         <option key={index} value={value['id']}>
            {value['name']}
         </option>
      ));
   }

   handleOnchange = async (e) => {
      switch (e.target.name) {
         case 'country':
            await getCityById(e.target.value).then((res) =>
               this.props.getAddress(ActionTypes.GET_ALL_CITY, res['results'])
            );
            this.setState({ formData: { ...this.state.formData, countryId: parseInt(e.target.value) } });
            break;
         case 'city':
            await getDistrictById(e.target.value).then((res) =>
               this.props.getAddress(ActionTypes.GET_ALL_DISTRICT, res['results'])
            );
            this.setState({ formData: { ...this.state.formData, provinceId: parseInt(e.target.value) } });
            break;
         case 'district':
            await getWardById(e.target.value).then((res) =>
               this.props.getAddress(ActionTypes.GET_ALL_WARD, res['results'])
            );
            this.setState({ formData: { ...this.state.formData, districtId: parseInt(e.target.value) } });
            break;
         case 'ward':
            this.setState({ formData: { ...this.state.formData, wardId: parseInt(e.target.value) } });
            break;
         case 'role':
            this.setState({ formData: { ...this.state.formData, isAdmin: parseInt(e.target.value) } });
            break;
         case 'status':
            this.setState({ formData: { ...this.state.formData, isActive: parseInt(e.target.value) } });
            break;
         default:
            break;
      }
   };

   validateForm = () => {
      let isValid = true;
      let re = /\S+@\S+\.\S+/;
      if (re.test(this.state.formData.email) === false) {
         this.setState({ ...this.state, msgErr: { ...this.state.msgErr, msgEmail: 'Field is required' } });
         isValid = false;
      }

      if (this.state.formData.username.length === 0) {
         this.setState({ ...this.state, msgErr: { ...this.state.msgErr, msgUserName: 'Field is required' } });
         isValid = false;
      }
      if (this.state.formData.lastName.length === 0) {
         this.setState({ ...this.state, msgErr: { ...this.state.msgErr, msgLastName: 'Field is required' } });
         isValid = false;
      }
      if (this.state.formData.password.length === 0) {
         this.setState({ ...this.state, msgErr: { ...this.state.msgErr, msgPassword: 'Field is required' } });
         isValid = false;
      }
      return isValid;
   };

   handleUpdate = () => {
      const { createdAt, createdBy, firstLogin, lastLogin, updatedAt, updatedBy, id, ...dataUser } =
         this.state.formData;
      let isValid = this.validateForm(dataUser);
      if (isValid === false) {
         return;
      }
      this.props.updateUser(this.state.formData);
      this.hide();
   };

   handleAdd = async (e) => {
      let isValid = await this.validateForm();
      if (isValid === false) {
         return;
      }
      await create(this.state.formData).then((res) => {
         this.requestGetLatestUser(res);
      });
   };

   requestGetLatestUser = () => {
      getAll().then((res) => {
         if (res.statusCode === 200) {
            this.props.getUser(res['results']);
            this.hide();
         }
      });
   };

   getFirstOpt(data) {
      return data[0]['name'];
   }

   render() {
      var { country, city, district, ward } = this.props.address;
      return (
         <Modal scrollable={true} size='lg' show={this.props.show} onHide={this.props.show}>
            <Modal.Header className='modal-header'>
               <Modal.Title>{this.props.action}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
               <Form>
                  {/* User name && Password */}

                  <Row className={classConstant.CLASS_MB3}>
                     <Form.Group as={Col}>
                        <Form.Label className={classConstant.CLASS_LABEL_REQUIRED}>
                           {tableConstant.tbUsername}
                        </Form.Label>
                        <Form.Control
                           type='text'
                           value={this.state.formData['username']}
                           placeholder='Enter your username'
                           onChange={(e) =>
                              this.setState({ formData: { ...this.state.formData, username: e.target.value } })
                           }
                        />
                        <Form.Text className='text-danger'>{this.state.msgErr.msgUserName}</Form.Text>
                     </Form.Group>

                     <Form.Group as={Col}>
                        <Form.Label className={classConstant.CLASS_LABEL_REQUIRED}>
                           {tableConstant.tbPassword}
                        </Form.Label>
                        <Form.Control
                           type='password'
                           value={this.state.formData['password']}
                           placeholder='Password'
                           onChange={(e) =>
                              this.setState({ formData: { ...this.state.formData, password: e.target.value } })
                           }
                        />
                        <Form.Text className='text-danger'>{this.state.msgErr.msgPassword}</Form.Text>
                     </Form.Group>
                  </Row>

                  {/* First name && Last name */}

                  <Row className={classConstant.CLASS_MB3}>
                     <Form.Group as={Col}>
                        <Form.Label className={classConstant.CLASS_LABEL}>First name</Form.Label>
                        <Form.Control
                           type='text'
                           value={this.state.formData['firstName']}
                           placeholder='Enter your first name'
                           onChange={(e) =>
                              this.setState({ formData: { ...this.state.formData, firstName: e.target.value } })
                           }
                        />
                     </Form.Group>

                     <Form.Group as={Col}>
                        <Form.Label className={classConstant.CLASS_LABEL_REQUIRED}>
                           {tableConstant.tbLastName}
                        </Form.Label>
                        <Form.Control
                           type='text'
                           value={this.state.formData['lastName']}
                           placeholder='Enter your last name'
                           onChange={(e) =>
                              this.setState({ formData: { ...this.state.formData, lastName: e.target.value } })
                           }
                        />
                        <Form.Text className='text-danger'>{this.state.msgErr.msgLastName}</Form.Text>
                     </Form.Group>
                  </Row>

                  {/* Role && Status */}

                  <Row className={classConstant.CLASS_MB3}>
                     <Form.Group as={Col}>
                        <Form.Label className={classConstant.CLASS_LABEL}>{tableConstant.tbRole}</Form.Label>
                        <Form.Select
                           name='role'
                           id='role-opt'
                           defaultValue={parseInt(this.state.formData['isAdmin']) === 1 ? '1' : '0'}
                           onChange={(e) => this.handleOnchange(e)}
                        >
                           <option value='0'>Administrator</option>
                           <option value='1'>User</option>
                        </Form.Select>
                     </Form.Group>

                     <Form.Group as={Col}>
                        <Form.Label className={classConstant.CLASS_LABEL}>{tableConstant.tbStatus}</Form.Label>
                        <Form.Select
                           name='status'
                           defaultValue={parseInt(this.state.formData['isActive']) === 1 ? '1' : '0'}
                           id='status-opt'
                           onChange={(e) => this.handleOnchange(e)}
                        >
                           <option value='0'>Active</option>
                           <option value='1'>InActive</option>
                        </Form.Select>
                     </Form.Group>
                  </Row>

                  {/* Phone */}

                  <Form.Group className={classConstant.CLASS_MB3}>
                     <Form.Label className={classConstant.CLASS_LABEL}>{tableConstant.tbPhone}</Form.Label>
                     <Form.Control
                        type='number'
                        value={this.state.formData['phone']}
                        onChange={(e) => this.setState({ formData: { ...this.state.formData, phone: e.target.value } })}
                     />
                  </Form.Group>

                  {/* Email */}

                  <Form.Group className={classConstant.CLASS_MB3}>
                     <Form.Label className={classConstant.CLASS_LABEL_REQUIRED}>{tableConstant.tbEmail}</Form.Label>
                     <Form.Control
                        type='email'
                        value={this.state.formData['email']}
                        placeholder='@gmail'
                        onChange={(e) => this.setState({ formData: { ...this.state.formData, email: e.target.value } })}
                     />
                     <Form.Text className='text-danger'>{this.state.msgErr.msgEmail}</Form.Text>
                  </Form.Group>

                  {/* Country & City & District & Ward */}

                  <Row className={classConstant.CLASS_MB3}>
                     <Form.Group as={Col}>
                        <Form.Label className={classConstant.CLASS_LABEL}>{tableConstant.tbCountry}</Form.Label>
                        <Form.Select name='country' id='country-opt' onChange={(e) => this.handleOnchange(e)}>
                           <option hidden value=''>
                              {country.length > 0 ? this.getFirstOpt(country) : 'Choose...'}
                           </option>
                           {country.length > 0 ? this.optionAddress(country) : null}
                        </Form.Select>
                     </Form.Group>

                     <Form.Group as={Col}>
                        <Form.Label className={classConstant.CLASS_LABEL}>{tableConstant.tbCity}</Form.Label>
                        <Form.Select name='city' id='city-opt' onChange={(e) => this.handleOnchange(e)}>
                           <option hidden value=''>
                              {city.length > 0 ? this.getFirstOpt(city) : 'Choose...'}
                           </option>
                           {city.length > 0 ? this.optionAddress(city) : null}
                        </Form.Select>
                     </Form.Group>

                     <Form.Group as={Col}>
                        <Form.Label className={classConstant.CLASS_LABEL}>{tableConstant.tbDistrict}</Form.Label>
                        <Form.Select name='district' id='district-opt' onChange={(e) => this.handleOnchange(e)}>
                           <option hidden value=''>
                              {district.length > 0 ? this.getFirstOpt(district) : 'Choose...'}
                           </option>
                           {district.length > 0 ? this.optionAddress(district) : null}
                        </Form.Select>
                     </Form.Group>

                     <Form.Group as={Col}>
                        <Form.Label className={classConstant.CLASS_LABEL}>{tableConstant.tbWard}</Form.Label>
                        <Form.Select name='ward' id='ward-opt' onChange={(e) => this.handleOnchange(e)}>
                           <option hidden value=''>
                              {ward.length > 0 ? this.getFirstOpt(ward) : 'Choose...'}
                           </option>
                           {ward.length > 0 ? this.optionAddress(ward) : null}
                        </Form.Select>
                     </Form.Group>
                  </Row>

                  {/* Address TextArea */}

                  <Form.Group className={classConstant.CLASS_MB3_TEXTAREA}>
                     <Form.Control
                        as='textarea'
                        rows={3}
                        onChange={(e) =>
                           this.setState({ formData: { ...this.state.formData, addressDes: e.target.value } })
                        }
                        value={this.state.formData['addressDes'] || ''}
                     />
                  </Form.Group>

                  {/* Note TextArea */}

                  <Form.Group className={classConstant.CLASS_MB3_TEXTAREA}>
                     <Form.Label className={classConstant.CLASS_LABEL}>{tableConstant.tbNote}</Form.Label>
                     <Form.Control
                        as='textarea'
                        rows={3}
                        onChange={(e) => this.setState({ formData: { ...this.state.formData, note: e.target.value } })}
                        value={this.state.formData['note'] || ''}
                     />
                  </Form.Group>
               </Form>
            </Modal.Body>
            <Modal.Footer>
               <Button variant={classConstant.CLASS_VARIANT_SECONDARY} onClick={() => this.hide()}>
                  {textEventConstant.TEXT_CLOSE}
               </Button>
               <Button
                  variant={classConstant.CLASS_BTN_PRIMARY}
                  onClick={(e) =>
                     textEventConstant.TXT_ADD_USER === this.props.action ? this.handleAdd(e) : this.handleUpdate()
                  }
               >
                  {textEventConstant.TEXT_SAVE}
               </Button>
            </Modal.Footer>
         </Modal>
      );
   }
}
const mapStateToProps = (state) => {
   return {
      address: state.address,
      users: state.users,
   };
};

const mapDispatchToProps = (dispatch, props) => {
   return {
      getAddress: (action, address) => {
         dispatch(actionGetAddress(action, address));
      },
      getUser: (users) => {
         dispatch(actionGetAllUser(users));
      },
      updateUser: (users) => {
         dispatch(actionUpdateUser(users));
      },
   };
};

// Define PropTypes
ModalDashBoard.propTypes = {
   show: PropTypes.bool.isRequired,
   hide: PropTypes.func.isRequired,
   action: PropTypes.string.isRequired,
   address: PropTypes.object.isRequired,
   userId: PropTypes.number,
   users: PropTypes.object,
};

export default connect(mapStateToProps, mapDispatchToProps)(ModalDashBoard);
