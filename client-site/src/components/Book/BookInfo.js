import React, { Fragment } from 'react';
import { useSelector } from 'react-redux';

const BookInfo = () => {
  const {readOneBook , books}  = useSelector(state=>state.book);
  console.log(readOneBook  , books)
  return (
    <Fragment>

     { readOneBook && books.length>0 ?(
       
        <div class="card mb-3">
        
        <img src={readOneBook .image} class="img-fluid rounded-start" alt="..." />
          <div class="card-body">
          <h3 class="card-title">{readOneBook .bookName}</h3>
          <p class="card-text">{readOneBook .description}</p>
          <p class="card-text">price : <span className=' fw-bolder bg-info p-1 text-light rounded'>{readOneBook .price}$</span> </p>
          <button className='btn btn-primary'>Buy Now</button>
          </div>
        </div>
     ) : null} 
      
    </Fragment>
  );
};

export default BookInfo;
