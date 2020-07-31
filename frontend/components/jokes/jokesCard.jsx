import React from 'react';




class JokesCard extends React.Component {
    constructor(props){
        super(props);
        
        this.state = {setup: '', punchline: '', smile: false, frown: false, id:null};
        this.changeSmile = this.changeSmile.bind(this);
        this.changeFrown = this.changeFrown.bind(this);
   
    }

    componentDidMount(){
        debugger
        this.setState({id: this.props.joke_id, setup: this.props.setup, punchline: this.props.punchline, smile: this.props.smile, frown: this.props.frown})
    }

    changeSmile(){
        let like = {
            user_id: this.props.user.id,
            joke_id: this.state.id
        }
        if(this.state.smile){
            like.smile = false;
            like.frown = false;
            if(this.props.likes[this.props.id]){
                this.props.updateLike(like).then(() => this.setState({smile: false, frown: false}))
            } else {
                this.props.createLike(like).then(() => this.setState({smile: false, frown: false}))
            }
        } else {
            like.smile = true;
            like.frown = false;
            if(this.props.likes[this.props.id]){
                this.props.updateLike(like).then(() => Sthis.setState({smile: true, frown: false}))
            } else {
                this.props.createLike(like).then(() => this.setState({smile: true, frown: false}))
            }
        }
        
    }

    changeFrown(){
        let like = {
            user_id: this.props.user.id,
            joke_id: this.state.id
        }
        if(this.state.frown){
            like.smile = false;
            like.frown = false;
            if(this.props.likes[this.props.id]){
                this.props.updateLike(like).then(() => this.setState({smile: false, frown: false}))
            } else {
                this.props.createLike(like).then(() => this.setState({smile: false, frown: false}))
            }
            
        } else {
            like.smile = false;
            like.frown = true;
            if(this.props.likes[this.props.id]){
                this.props.updateLike(like).then(() => this.setState({smile: false, frown: true}))
            } else {
                this.props.createLike(like).then(() => this.setState({smile: false, frown: true}))
            }   
        }
    }

    render(){

        let smile;
        let frown
        if(this.state.smile){
            smile = 'smile'
        } else {
            smile = ''
        }
        if(this.state.frown){
            frown = 'frown'
        } else {
            frown = ''
        }

       
        return (
            
            <div className='joke-card'>
                <div className = 'setup'>
                    <h2>{this.props.setup}</h2>
                </div>
                <div className = 'punch-line'>
                    <h3>{this.props.punchline}</h3>
                </div>

                <div className = 'like-buttons'>
                    <img onClick={this.changeSmile} className = {smile} src={window.smile} alt="like button as a smiley"/>
                  
                    <img onClick={this.changeFrown} className = {frown} src={window.frown} alt="dislike button as a frown"/>
                </div>
                
            </div>
          
        )
        
    }
};

export default JokesCard;