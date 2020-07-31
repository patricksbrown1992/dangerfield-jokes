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

    receiveJokes(jokes, likes){
        let arr = []
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
            {
                setup: 'I was making love to this girl and she started crying. I said, “Are you going to hate yourself in the morning?”',
                punchline: 'She said, “No, I hate myself now.”',
                
                id: 5005
            }, 



        ]
        jokes.unshift(...other_jokes)
       

        let i = 0
        while (i < jokes.length){
            let joke = jokes[i];
            
            if(joke.id in likes){
            
                arr.push({joke_id: joke.id, setup: joke.setup, punchline: joke.punchline, frown: likes[joke.id].frown, smile: likes[joke.id].smile})
            } else {
        
                arr.push({joke_id: joke.id, setup: joke.setup, punchline: joke.punchline, frown: false, smile: false})

            }
            i++;
        }
   
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

        
  
        let jokes = this.state.jokes.map(joke => {
        
            return <Card setup={joke.setup} joke_id={joke.joke_id} punchline={joke.punchline} smile={joke.smile} frown={joke.frown}/>
        });
        let rodneys_jokes = jokes.slice(0,6);
        let other_jokes = jokes.slice(6);
       
       
        return (
            
            <div className='joke-index'>
                
                <button onClick={this.props.logout}>Log Out</button>
                <h1>Rodney's Jokes</h1>
                {rodneys_jokes}
                <br/>
                <br/>
                <h1>Jokes from API</h1>
                {other_jokes}



            </div>
          
        )
        
    }
};

export default JokesForm;