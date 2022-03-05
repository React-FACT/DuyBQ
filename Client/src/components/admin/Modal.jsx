import React, { Component } from 'react';
import { Modal, Button, Form, Row, Col } from 'react-bootstrap';
import { getCountry } from '../../apis/address/address.api';
class ModalDashBoard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      country: [],
      opt_country: 'Choose...',
      city: [],
      opt_city: 'Choose...',
      district: [],
      opt_district: 'Choose...',
      ward: [],
      opt_ward: 'Choose...',
    };
  }
  async componentDidMount() {
    await getCountry().then((res) => this.setState({ ...this.state, country: res['results'] }));
  }

  hide() {
    this.props.hide(true);
  }

  optionAddress(address) {
    return address.map((value, index) => (
      <option key={index} value={value['id']}>
        {value['name']}
      </option>
    ));
  }

  render() {
    return (
      <Modal scrollable={true} size='lg' show={this.props.show} onHide={this.props.show}>
        <Modal.Header className='modal-header'>
          <Modal.Title>{this.props.action}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            {/* User name && Password */}

            <Row className='mb-3'>
              <Form.Group as={Col}>
                <Form.Label className='fw-bold input-required'>User name</Form.Label>
                <Form.Control type='text' placeholder='Enter your username' />
              </Form.Group>

              <Form.Group as={Col}>
                <Form.Label className='fw-bold input-required'>Password</Form.Label>
                <Form.Control type='password' placeholder='Password' />
              </Form.Group>
            </Row>

            {/* First name && Last name */}

            <Row className='mb-3'>
              <Form.Group as={Col}>
                <Form.Label className='fw-bold '>First name</Form.Label>
                <Form.Control type='text' placeholder='Enter your email' />
              </Form.Group>

              <Form.Group as={Col}>
                <Form.Label className='fw-bold input-required'>Last name</Form.Label>
                <Form.Control type='text' placeholder='Enter your last name' />
              </Form.Group>
            </Row>

            {/* Role && Status */}

            <Row className='mb-3'>
              <Form.Group as={Col}>
                <Form.Label className='fw-bold'>Role</Form.Label>
                <Form.Control type='email' placeholder='Enter Role' />
              </Form.Group>

              <Form.Group as={Col}>
                <Form.Label className='fw-bold'>Status</Form.Label>
                <Form.Control type='password' placeholder='Status' />
              </Form.Group>
            </Row>

            {/* Email */}

            <Form.Group className='mb-3'>
              <Form.Label className='fw-bold input-required'>Email</Form.Label>
              <Form.Control type='email' placeholder='@gmail' />
            </Form.Group>

            {/* Country & City & District & Ward */}

            <Row className='mb-3'>
              <Form.Group as={Col}>
                <Form.Label className='fw-bold'>{this.state.opt_country}</Form.Label>
                <Form.Select id='country-opt' onChange={(e) => console.log(e)}>
                  <option value=''>{this.state.opt_country}</option>
                  {this.state.country.length > 0 ? this.optionAddress(this.state.country) : null}
                </Form.Select>
              </Form.Group>

              <Form.Group as={Col} controlId='formGridState'>
                <Form.Label className='fw-bold'>City</Form.Label>
                <Form.Select defaultValue='Choose...'>
                  <option>Choose...</option>
                  <option>...</option>
                </Form.Select>
              </Form.Group>

              <Form.Group as={Col} controlId='formGridZip'>
                <Form.Label className='fw-bold'>District</Form.Label>
                <Form.Select defaultValue='Choose...'>
                  <option>Choose...</option>
                  <option>...</option>
                </Form.Select>
              </Form.Group>

              <Form.Group as={Col} controlId='formGridZip'>
                <Form.Label className='fw-bold'>Ward</Form.Label>
                <Form.Select defaultValue='Choose...'>
                  <option>Choose...</option>
                  <option>...</option>
                </Form.Select>
              </Form.Group>
            </Row>

            {/* Address TextArea */}

            <Form.Group className='mb-3 modal-textarea'>
              <Form.Control as='textarea' rows={3} />
            </Form.Group>

            {/* Note TextArea */}

            <Form.Group className='mb-3 modal-textarea'>
              <Form.Label className='fw-bold'>Note</Form.Label>
              <Form.Control as='textarea' rows={3} />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant='secondary' onClick={() => this.hide()}>
            Close
          </Button>
          <Button variant='primary'>Save Changes</Button>
        </Modal.Footer>
      </Modal>
    );
  }
}

export default ModalDashBoard;
