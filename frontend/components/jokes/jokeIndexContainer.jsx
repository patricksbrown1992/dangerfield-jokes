import {logout} from '../../actions/sessionActions';
import JokesIndex from './jokesIndex';
import {getLikes, clearLikes} from '../../actions/likeActions';
import { connect } from 'react-redux';
import {withRouter} from 'react-router-dom';


const msp = state => ({
    user: state.entities.user[state.session.id],
    likes: state.entities.likes
    
});

const mdp = dispatch => ({
    
    logout: () => dispatch(logout()),
    getLikes: user => dispatch(getLikes(user)),
    clearLikes: () => dispatch(clearLikes())


});

export default withRouter(connect(msp, mdp)(JokesIndex));