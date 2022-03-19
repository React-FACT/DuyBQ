import { Component } from 'react';

class Toast extends Component {
   componentDidMount() {
      console.log(this.props);
   }
   render() {
      return (
         <div class='alert alert-warning alert-dismissible fade show' role='alert'>
            <strong>Test!</strong> You should check in on some of those fields below.
            <button type='button' class='close' data-dismiss='alert' aria-label='Close'>
               <span aria-hidden='true'>&times;</span>
            </button>
         </div>
      );
   }
}

export default Toast;
