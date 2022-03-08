import React, { Component } from 'react';
import TableDashBoard from './TableDashBoard';
import PropTypes from 'prop-types';
import { getAll } from '../../apis/admin/admin.api';
import Loader from '../helpers/Loader';
import Header from '../layout/Header';
import { connect } from 'react-redux';
import './Dashboard.css';
import { actionGetAllUser } from '../../redux/actions/admin.Action';

class Dashboard extends Component {
   constructor(props) {
      super(props);
      this.state = {
         isLoading: false,
      };
   }

   componentDidMount() {
      setTimeout(() => {
         getAll().then((res) => {
            this.props.getAllUser(res['results']);
            this.setState({ isLoading: true });
         });
      }, 3000);
   }

   render() {
      var { users } = this.props;
      return (
         <div>
            <Header />
            <div> {this.state.isLoading === true ? <TableDashBoard data={users} /> : <Loader />}</div>
         </div>
      );
   }
}

const mapStateToProps = (state) => {
   return {
      users: state.users,
   };
};

const mapDispatchToProps = (dispatch, props) => {
   return {
      getAllUser: (users) => {
         dispatch(actionGetAllUser(users));
      },
   };
};

Dashboard.propTypes = {
   users: PropTypes.arrayOf(
      PropTypes.shape({
         id: PropTypes.number.isRequired,
         username: PropTypes.string.isRequired,
         email: PropTypes.string.isRequired,
         password: PropTypes.string.isRequired,
         firstName: PropTypes.string.isRequired,
         lastName: PropTypes.string.isRequired,
         birthDate: PropTypes.string.isRequired,
         firstLogin: PropTypes.string.isRequired,
         lastLogin: PropTypes.string.isRequired,
         isActive: PropTypes.number.isRequired,
         isAdmin: PropTypes.number.isRequired,
         phone: PropTypes.string.isRequired,
         countryId: PropTypes.number.isRequired,
         provinceId: PropTypes.number.isRequired,
         districtId: PropTypes.number.isRequired,
         wardId: PropTypes.number.isRequired,
         createdAt: PropTypes.string,
         createdBy: PropTypes.string,
         updatedAt: PropTypes.string,
         updatedBy: PropTypes.string,
      }).isRequired
   ),
};

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
