import React from 'react';

import {Link} from 'react-router-dom';
import { render } from 'react-dom';
import {login} from '../../actions/sessionActions';
import {connect} from 'react-redux';

// const msp = state => ({

// })

const mdp = dispatch => ({
    login: user => dispatch(login(user))
})

class splashForm extends React.Component {
    constructor(props){
        super(props);
        this.demo = this.demo.bind(this);
        
    }

    demo(){
     
        this.props.login({email: 'admin@admin.com', password: '123456'})
    }

    render(){
        
        return (
            <div className = "splash-form">
                <div className = 'splash-header'>
                    <div className = 'external-links-div'>
                        <a href="https://patricksbrown1992.github.io/portfolio/" target="_blank">Portfolio</a>
                        <a href="https://www.linkedin.com/in/patricksbrown1992/" target="_blank">LinkedIn</a>
                        <a href="https://github.com/patricksbrown1992" target="_blank">Github</a>
                        <h1>Dangerfield-ster</h1>
                    </div>
                    <div className = 'internal-links-div'>
                        <Link to='/login'>Sign In</Link>
                        <Link className = 'sign-up-link' to='/signup'>Sign Up</Link>
                    </div>
                    
                </div>
                <div className = 'splash-body'>
                    <div className = 'splash-body-left'>
                        <h1>Welcome to the Ferly crew</h1>
                        <h3>I'm really excited about the opportunity</h3>
                        <button className = 'demo-button' onClick={this.demo}>Demo</button>
                    </div>
                    <div className='splash-body-right'>
                        <img src={window.dangerfield} />
                    </div>
                    
                </div>
                
            
            </div>
        )
    }
}
    

    
    
    


export default connect(null, mdp)(splashForm);