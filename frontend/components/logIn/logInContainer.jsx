import { connect } from 'react-redux';
import LogInForm from './logInForm';
import { login, } from '../../actions/sessionActions';



const mdp = (dispatch) => ({
    login: (user) => dispatch(login(user)),

});


export default connect(null, mdp)(LogInForm);