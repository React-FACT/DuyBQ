import React, { Component } from 'react';
import { Container, Form, Button } from 'react-bootstrap';
import Loader from '../helpers/Loader';
class Login extends Component {
   constructor(props) {
      super(props);
      this.state = {
         email: '',
         password: '',
         isLoggedIn: false,
         msgErr: '',
      };
   }

   handleLogin = (e) => {
      e.preventDefault();
      let { email, password } = this.state;
      if (email.includes('admin@mail.com') && password.includes('admin')) {
         this.setState({ ...this.state, isLoggedIn: true });
         setTimeout(() => {
            this.setState({ ...this.state, isLoggedIn: false });
            this.props.history.push('/');
         }, 2000);
      } else {
         this.setState({ ...this.state, msgErr: 'email or password incorrect' });
      }
   };

   render() {
      return (
         <div>
            {this.state.isLoggedIn ? (
               <Loader />
            ) : (
               <Container className='mt-4'>
                  <Form onSubmit={(e) => this.handleLogin(e)}>
                     <Form.Group className='mb-3'>
                        <Form.Label>Email address</Form.Label>
                        <Form.Control
                           type='email'
                           placeholder='Enter email'
                           onChange={(e) => this.setState({ ...this.state, email: e.target.value })}
                        />
                        <Form.Text className='text-muted'>{this.state.msgErr}</Form.Text>
                     </Form.Group>

                     <Form.Group className='mb-3'>
                        <Form.Label>Password</Form.Label>
                        <Form.Control
                           type='password'
                           placeholder='Password'
                           onChange={(e) => this.setState({ ...this.state, password: e.target.value })}
                        />
                     </Form.Group>
                     <Button variant='primary' type='submit'>
                        Login
                     </Button>
                  </Form>
               </Container>
            )}
         </div>
      );
   }
}

export default Login;
