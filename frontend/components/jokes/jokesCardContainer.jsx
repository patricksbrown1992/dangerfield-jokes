import {logout} from '../../actions/sessionActions';
import JokesCard from './jokesCard';
import {updateLike, createLike, deleteLike} from '../../actions/likeActions';
import { connect } from 'react-redux';
import {withRouter} from 'react-router-dom';

const msp = state => ({
    user: state.entities.user[state.session.id],
    likes: state.entities.likes
    
    
});

const mdp = dispatch => ({
    
    logout: () => dispatch(logout()),
    createLike: like => dispatch(createLike(like)),
    updateLike: like => dispatch(updateLike(like)),
    deleteLike: like => dispatch(deleteLike(like))


});

export default withRouter(connect(msp, mdp)(JokesCard));