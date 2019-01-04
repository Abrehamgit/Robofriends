import React,{Component} from 'react';
import CardList from '../components/CardList';
import robots from '../robots';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';


class App extends Component{
   
 constructor(){
   	super();
   	    this.state= {
	        robots : [],
	        searchField: '' 
	       }
        }
        
   componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(resp=>resp.json())
    .then(result=> this.setState(()=>({robots:result})))
     
   }
    searchChange = (event) =>{
    	this.setState({searchField: event.target.value})
              console.log(event.target.value); 
              	
             }

   render() { 
   const {robots,searchField} = this.state;
  const filteredRobots =robots.filter(robot=>{
              	return robot.name.toLowerCase().includes(searchField.toLowerCase());
              })
   		
   		return (
		<div className= 'tc'>
		  <h1 className='f1' > Robofriends </h1>
		  <SearchBox searchChange= {this.searchChange}/>
		  <Scroll>
          		<CardList robots = {filteredRobots} />
          </Scroll>    
        </div> 
             );
	}

}



export default App;