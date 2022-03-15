import React, { Component } from 'react';
import './Dashboard.css';
import PropTypes from 'prop-types';
import Header from '../layout/Header';
import Loader from '../helpers/Loader';
import TableDashBoard from './TableDashBoard';
import { connect } from 'react-redux';
import { actionGetAllUser } from '../../redux/actions/admin.Action';
class Dashboard extends Component {
   componentDidMount() {
      this.props.getAllUser();
   }
   render() {
      const { dataUsers, isLoading } = this.props.users;
      return (
         <div>
            <Header />
            {isLoading ? <Loader /> : <TableDashBoard data={dataUsers} />}
         </div>
      );
   }
}

const mapStateToProps = (state) => {
   return {
      users: state.users,
   };
};
const mapDispatchToProps = (dispatch) => {
   return {
      getAllUser: (params) => dispatch(actionGetAllUser(params)),
   };
};

// Define PropTypes
Dashboard.propTypes = {
   users: PropTypes.object.isRequired,
   dataUsers: PropTypes.objectOf(
      PropTypes.shape({
         id: PropTypes.bool.isRequired,
         username: PropTypes.string,
         email: PropTypes.string,
         password: PropTypes.string,
         firstName: PropTypes.string,
         lastName: PropTypes.string,
         birthDate: PropTypes.string,
         firstLogin: PropTypes.string,
         lastLogin: PropTypes.string,
         isActive: PropTypes.number,
         isAdmin: PropTypes.number,
         phone: PropTypes.string,
         countryId: PropTypes.number,
         provinceId: PropTypes.number,
         districtId: PropTypes.number,
         wardId: PropTypes.number,
         createdAt: PropTypes.string,
         createdBy: PropTypes.string,
         updatedAt: PropTypes.string,
         updatedBy: PropTypes.string,
      })
   ),
};

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
