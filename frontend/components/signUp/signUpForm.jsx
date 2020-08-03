import React from 'react';
import { Link } from 'react-router-dom';

class SignUpForm extends React.Component {
    constructor(props){
        super(props);
        this.state = {email: '', password: ''};
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
     
    handleChange(field) {
        
        return (e) => {
            this.setState({[field]: e.target.value});
        };
    }

    handleSubmit(e){
        e.preventDefault();
        this.props.clearErrors();
        this.props.signup(this.state);
        this.setState({ email: '', password: '' });
        
            
       
        
    }
 
    render(){
    
       let errors;
       if (this.props.errors.length > 0) {

            errors = this.props.errors.map((error, idx) => {
                return <li key={idx}>{error}</li>
            });
        } 
      
        return (
            
                <div className = 'outerdiv'>
                    <div className='log-in-form'>
                    
                            <div className ="log-in-top">
                                <h1 className='log-in-danger'>Dangerfield-ster</h1>
                                <h3>I don't get no respect</h3>

                            </div>
                            
                            <div className ="log-in-middle">
                        

                                <input className="log-in-email-input" placeholder='Email address' type="text" value={this.state.email} onChange={this.handleChange('email')}/>
                                <input className='log-in-password' type="password" placeholder='Password' value={this.state.password} onChange={this.handleChange('password')} />
                                {errors}
                                <form onSubmit={this.handleSubmit}>
                                    <div className='login-button'>

                                        <button type='submit'>Sign in</button>
                                    </div>
                                </form>
                            </div>
                            <div className="log-in-bottom">
                               
                                <h3>Already have an account?</h3>
                                <div className='redirect-to-login-signup'>
                                    <Link to='/login'>Sign In</Link>
                                </div>
                            </div>
                    
                    </div>
                </div>
            
        );
    };
};

export default SignUpForm;