import React from 'react';
import Card from './jokesCardContainer';



class JokesForm extends React.Component {
    constructor(props){
        super(props);
        
        this.state = {
            jokes: []
            }
        this.getJokes = this.getJokes.bind(this);
        this.receiveJokes = this.receiveJokes.bind(this);
    };

    componentWillUnmount(){
        this.props.clearLikes();
    }

    receiveJokes(jokes, likes){
        // let arr = []
        let other_jokes = [
        
            {
                setup: 'My wife and I were happy for twenty years.',
                punchline: 'Then we met.',
        
                id: 5000
            },
            {
                setup: 'I asked my old man if I could go ice-skating on the lake.',
                punchline: 'He told me, “Wait til it gets warmer.”',
             
                id: 5001

            },
            {
                setup: 'I could tell that my parents hated me.',
                punchline: 'My bath toys were a toaster and a radio.',
         
                id: 5002
            },
            {
                setup: 'My psychiatrist told me I’m going crazy. I told him, “If you don’t mind, I’d like a second opinion.”',
                punchline: 'He said, “All right. You’re ugly too!”',
            
                id: 5003
            },
            {
                setup: 'Last night my wife met me at the front door. She was wearing a sexy negligee.',
                punchline: 'The only trouble was, she was coming home.',
      
                id: 5004
            }, 
            



        ]
        jokes.unshift(...other_jokes)
       

        // let i = 0
        // while (i < jokes.length){
        //     let joke = jokes[i];
            
            
            
        //         arr.push({joke_id: joke.id, setup: joke.setup, punchline: joke.punchline, frown: likes[joke.id].frown, smile: likes[joke.id].smile})
        //     } else {
        
                

        //     }
        //     i++;
        // }

        let arr = jokes.map(joke => {
       
            if(joke.id in likes){
            
                return <Card key = {joke.id} setup={joke.setup} joke_id={joke.id} punchline={joke.punchline} smile={likes[joke.id].smile} frown={likes[joke.id].frown}/>

            }else {
                return <Card key = {joke.id} setup={joke.setup} joke_id={joke.id} punchline={joke.punchline} smile={false} frown={false}/>
            }
        
        });
        
        // let all_jokes = this.state.jokes.concat(arr)
        this.setState({jokes: arr})
    }

    
    getJokes(){
     
        
            return $.ajax({
                
                url: 'https://official-joke-api.appspot.com/jokes/programming/ten'
            })
        
    }
    
    componentDidMount(){

        
        this.props.getLikes(this.props.user).then(() => this.getJokes()).then(jokes => (this.receiveJokes(jokes, this.props.likes)))
        
    
 
    }
    

    render(){

        
  
        
        let rodneys_jokes = this.state.jokes.slice(0,5);
        let other_jokes = this.state.jokes.slice(5);
       
       
        return (
            
            <div className='joke-index'>
                <div className = 'splash-header'>
                    <div className = 'external-links-div'>
                        <a href="https://patricksbrown1992.github.io/portfolio/" target="_blank">Portfolio</a>
                        <a href="https://www.linkedin.com/in/patricksbrown1992/" target="_blank">LinkedIn</a>
                        <a href="https://github.com/patricksbrown1992" target="_blank">Github</a>
                        <h1>Dangerfield-ster</h1>
                    </div>
                    <div className = 'internal-links-div'>
                        <button className='log-out-button'onClick={this.props.logout}>Log Out</button>
                    </div>
                    
                </div>
                
                <img src={window.smile} alt="smiley"/>
                <div className='joke-label-div'>
                    <h1 className='joke-label'>Rodney's Jokes</h1>
                </div>
                
                {rodneys_jokes}
                <br/>
                <br/>
                <div className='joke-label-div'>
                    <h1 className='joke-label'>Jokes from API</h1>
                </div>
                {other_jokes}



            </div>
          
        )
        
    }
};

export default JokesForm;