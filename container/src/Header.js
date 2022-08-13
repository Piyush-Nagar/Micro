import React from 'react';

import { Link } from 'react-router-dom';


function onClickButton() {
  console.log("Testing on Click");
}
  
const Header = () => {
  return (
    <div className="header">
       	<Link to='/child1'>child1</Link>
         <Link to='/child2'>child2</Link>  
         <button onClick={onClickButton}>redux Test</button>  
</div>
  );
}

export default Header;