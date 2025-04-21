import React, { Component } from 'react';
import { CiHeart } from "react-icons/ci";
import { FaHeart } from "react-icons/fa";

class Like extends Component {
  render() { 
    const {liked, onClick} = this.props;
    return (
      <div>
        {liked ? 
        <FaHeart onClick={onClick}/> : <CiHeart onClick={onClick}/>}
      </div>
    );
  }
}
 
export default Like;