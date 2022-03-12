import React, { Component } from 'react';
import { Container, Form, Button } from 'react-bootstrap';
import Loader from '../helpers/Loader';
import { login } from '../../apis/auth/auth';
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

   handleLogin = async (e) => {
      e.preventDefault();
      let { email, password } = this.state;
      let payload = { email, password };
      await login(payload)
         .then((res) => {
            this.setState({ ...this.state, isLoggedIn: true });
            if (res.statusCode === 401) {
               this.setState({ ...this.state, isLoggedIn: false });
               this.setState({ ...this.state, msgErr: 'email or password incorrect' });
            } else {
               this.setState({ ...this.state, isLoggedIn: false });
               localStorage.setItem('token', res.results.token);
               localStorage.setItem('users', JSON.stringify(res.results.users));
               this.props.history.push('/');
            }
            console.log(res);
         })
         .catch((er) => {
            this.setState({ ...this.state, msgErr: 'email or password incorrect' });
            console.log(er);
         });

      // if (email.includes('admin@mail.com') && password.includes('admin')) {
      //    this.setState({ ...this.state, isLoggedIn: true });
      //    setTimeout(() => {
      //       this.setState({ ...this.state, isLoggedIn: false });
      //       this.props.history.push('/');
      //    }, 2000);
      // } else {
      //    this.setState({ ...this.state, msgErr: 'email or password incorrect' });
      // }
   };

   render() {
      return (
         <div>
            {this.state.isLoggedIn ? (
               <Loader />
            ) : (
               <Container className='mt-4'>
                  <div data-testid='login'> LOGIN </div>
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
