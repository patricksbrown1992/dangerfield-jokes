import {connect} from 'react-redux';
import SignUpForm from './signUpForm';
import { signup, login } from '../../actions/sessionActions';



 
const mdp = (dispatch) => ({
    signup: (user) => dispatch(signup(user)), 
    login: (user) => dispatch(login(user)), 
  
});
 

export default connect(null, mdp)(SignUpForm);