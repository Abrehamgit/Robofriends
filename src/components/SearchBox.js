import React from 'react';


const SearchBox = ({searchChange}) =>{
	return (
     <div className='pa1'>
      <input 
      className='pa2 bg-lightest-blue b--green ba'
      type='seacrch' 
      placeholder='find a robot' 
      onChange = {searchChange}

       />
     </div>
		)
}


export default SearchBox;