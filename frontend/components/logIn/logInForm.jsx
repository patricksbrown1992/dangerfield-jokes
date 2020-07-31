import React from 'react';
import { Link } from 'react-router-dom';


class LogInForm extends React.Component {
    constructor(props){
        super(props);
        
        this.state = {email: '', password: ''};
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(field) {

        return (e) => {
            this.setState({ [field]: e.target.value });
        };
    }

    handleSubmit(e) {
   
        e.preventDefault();
        
        this.props.login(this.state);
       
        
      
    }
    render(){
        let passwordClass;
        let buttonText;
    
        // let changeHeight;
     
        
            // changeHeight= 'log-in-form-2'
            passwordClass = 'log-in-password-show';
            buttonText = 'Sign in';
        
        
       
        return (
            
            <div className='outerdiv'>
                <div className = 'log-in-form'>
                    <div className= "log-in-top">
                       
                        <h1 className='log-in-danger'>Dangerfield-ster</h1>
                        <h3>I don't get no respect</h3>
                    </div>
                    
                    <div className ="log-in-middle">
                        

                        <input className="log-in-email-input" placeholder='Email address' type="text" value={this.state.email} onChange={this.handleChange('email')}/>
                        <input className={passwordClass} type="password" placeholder='Password' value={this.state.password} onChange={this.handleChange('password')} />
                        
                        <form onSubmit={this.handleSubmit}>
                            <div className='enter-username'>

                                <button type='submit'>{buttonText}</button>
                            </div>
                        </form>
                    </div>
                    <div className ="log-in-bottom">

                        <h3>Remember me for 30 days</h3>
                        <h3>Don't have an account?</h3>
                        <div className='redirect-to-login-signup'>
                            <Link to='/signup'>Create account</Link>
                        </div>
                    </div>
                </div>

            </div>
          
        )
        
    }
};

export default LogInForm;