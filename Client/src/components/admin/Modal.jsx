import React, { Component } from 'react';
import { Modal, Button, Form, Row, Col } from 'react-bootstrap';
class ModalDashBoard extends Component {
  hide() {
    this.props.hide(true);
  }

  render() {
    return (
      <Modal size='lg' show={this.props.show} onHide={this.props.show}>
        <Modal.Header>
          <Modal.Title>{this.props.action}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Row className='mb-3'>
              <Form.Group as={Col} controlId='formGridEmail'>
                <Form.Label>Username</Form.Label>
                <Form.Control type='text' placeholder='Enter your username' />
              </Form.Group>

              <Form.Group as={Col} controlId='formGridPassword'>
                <Form.Label>Password</Form.Label>
                <Form.Control type='password' placeholder='Password' />
              </Form.Group>
            </Row>

            <Row className='mb-3'>
              <Form.Group as={Col} controlId='formGridEmail'>
                <Form.Label>FirstName</Form.Label>
                <Form.Control type='text' placeholder='Enter your email' />
              </Form.Group>

              <Form.Group as={Col} controlId='formGridPassword'>
                <Form.Label>LastName</Form.Label>
                <Form.Control type='text' placeholder='Enter your last name' />
              </Form.Group>
            </Row>

            <Row className='mb-3'>
              <Form.Group as={Col} controlId='formGridEmail'>
                <Form.Label>Email</Form.Label>
                <Form.Control type='email' placeholder='Enter email' />
              </Form.Group>

              <Form.Group as={Col} controlId='formGridPassword'>
                <Form.Label>Password</Form.Label>
                <Form.Control type='password' placeholder='Password' />
              </Form.Group>
            </Row>

            <Form.Group className='mb-3' controlId='formGridAddress1'>
              <Form.Label>Address</Form.Label>
              <Form.Control placeholder='1234 Main St' />
            </Form.Group>

            <Form.Group className='mb-3' controlId='formGridAddress2'>
              <Form.Label>Address 2</Form.Label>
              <Form.Control placeholder='Apartment, studio, or floor' />
            </Form.Group>

            <Row className='mb-3'>
              <Form.Group as={Col} controlId='formGridCity'>
                <Form.Label>City</Form.Label>
                <Form.Control />
              </Form.Group>

              <Form.Group as={Col} controlId='formGridState'>
                <Form.Label>State</Form.Label>
                <Form.Select defaultValue='Choose...'>
                  <option>Choose...</option>
                  <option>...</option>
                </Form.Select>
              </Form.Group>

              <Form.Group as={Col} controlId='formGridZip'>
                <Form.Label>Zip</Form.Label>
                <Form.Control />
              </Form.Group>
            </Row>

            <Form.Group className='mb-3' id='formGridCheckbox'>
              <Form.Check type='checkbox' label='Check me out' />
            </Form.Group>

            <Button variant='primary' type='submit'>
              Submit
            </Button>
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
