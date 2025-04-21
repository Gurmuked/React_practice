import React from 'react';
import _ from 'lodash';


const Pagination = (props) => {

  const{itemsCount, pageSize, currentPage, onPageChange } = props;

  const pagesCount = Math.ceil(itemsCount / pageSize);
  if( pagesCount == 1) return null;

 const pages =  _.range(1, pagesCount +1);

  return ( <nav className='pagination '>
    <ul className="page-item flex ">
      {pages.map(page => 
      <li key={page} className={page==currentPage ? 
      "page-link m-4 py-2 px-4 bg-gray-200 text-2xl text-black font-bold active:bg-blue-600" : "page-link m-4 py-2 px-4 bg-gray-200 text-2xl text-black font-bold"}>
            <a  
            style={{ cursor: "pointer" }}
            onClick = {() => onPageChange(page)}
            >{page}</a>
        </li>)} 
    </ul>
  </nav> );
}
 
export default Pagination;