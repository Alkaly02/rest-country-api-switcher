import React from 'react';
import EmptyList from '../assets/imgs/empty.jpg'

const EmtyList = () => {
  return (
    <div className='text-center mt-5'>
        <img src={EmptyList} alt="" />
        <p>This country is not part of this region</p>
    </div>
  )
}

export default EmtyList