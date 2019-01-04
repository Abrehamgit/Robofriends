import React from 'react';
import './Card.css';

const Card = ({name,email,id}) =>{
	return(
		<div className='bg-light-green grow size pa3 br2 ma3 dib tc bw2 shadow-4'>
		    <img src={`https://robohash.org/${id}? 200 x 200`} alt='robo'/>
		    <div>
		    <h2> {name} </h2>
		    
		    <p>  {email} </p>
		    </div>
		</div>
	)
}


export default Card;