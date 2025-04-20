import React from 'react';
const NavBar = (props) => {
  return (<div>
    <na className=''>
      <a herf="#" 
      className='w-30 h-10 ml-10 mt-10 bg-gray-400 text-black text-2xl'>
      NavBar{""}
      <span className='mx-5  bg-gray-400 text-2xl text-black'>{props.totalCountres}</span>
     </a>
    </na>
  </div>);
}
export default NavBar;
