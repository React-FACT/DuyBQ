import React from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { login } from '../../apis/auth/auth';
import { withRouter } from 'react-router-dom';
class Login extends React.Component {
   constructor(props) {
      super(props);
      this.state = {
         isLoggedIn: false,
      };
   }
   componentDidUpdate(prevProps, prevState) {
      if (prevState.isLoggedIn !== this.state.isLoggedIn) {
         this.props.history.push('/');
      }
   }
   render() {
      return (
         <Formik
            initialValues={{
               email: '',
               password: '',
            }}
            validationSchema={Yup.object().shape({
               email: Yup.string().email('Email is invalid').required('Email is required'),
               password: Yup.string().min(6, 'Password must be at least 6 characters').required('Password is required'),
            })}
            onSubmit={(fields) => {
               login(fields).then((res) => {
                  if (res.statusCode === 200) {
                     localStorage.setItem('token', res.results.token);
                     localStorage.setItem('users', JSON.stringify(res.results.users));
                     this.setState({ isLoggedIn: true });
                  }
               });
            }}
            render={({ errors, touched }) => (
               <Form>
                  <div className='container'>
                     <div>
                        <h1 className='text-success'> LOGIN </h1>
                     </div>
                     <div className='form-group'>
                        <label htmlFor='email'>Email</label>
                        <Field
                           name='email'
                           type='text'
                           className={'form-control' + (errors.email && touched.email ? ' is-invalid' : '')}
                        />
                        <ErrorMessage name='email' component='div' className='invalid-feedback' />
                     </div>
                     <div className='form-group'>
                        <label htmlFor='password'>Password</label>
                        <Field
                           name='password'
                           type='password'
                           className={'form-control' + (errors.password && touched.password ? ' is-invalid' : '')}
                        />
                        <ErrorMessage name='password' component='div' className='invalid-feedback' />
                     </div>
                     <div className='form-group mt-4'>
                        <button type='submit' className='btn btn-primary'>
                           Login
                        </button>
                     </div>
                  </div>
               </Form>
            )}
         />
      );
   }
}

export default withRouter(Login);
