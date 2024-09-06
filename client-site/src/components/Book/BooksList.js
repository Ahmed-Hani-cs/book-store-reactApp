import React from 'react';
import { delBook, getBookInfo } from '../../store/reducers/bookSlice';
import { useDispatch, useSelector } from 'react-redux';

const BooksList = ({loading , books}) => {
  const dispatch = useDispatch();
  const deleteBook = (id)=>{
    // delete book from server
    dispatch(delBook(id))
  }
  const readBookInfo = (id)=>{
    // delete book from server
    dispatch(getBookInfo(id));
  }
  const bookList = books.map((book)=>{
    return(
      <li key={book.id} className='list-group-item d-flex  justify-content-between align-items-center'>
          <div>{book.bookName}</div>
          <div className='btn-group' role='group'>
            <button type='button' className='btn btn-primary' onClick={()=>readBookInfo(book.id)}>
              Read
            </button>
            <button type='button' className='btn btn-danger' onClick={()=>deleteBook(book.id)}>
              Delete
            </button>
          </div>
        </li>
    )
  })
  return (
    <div>
    <h2>Books List</h2>
    {loading?(
      <h2>...loading</h2>
    ):(
      <ul className='list-group'>
        {books.length? bookList : "no books to show"}
      </ul>
    )}
    </div>
  );
};

export default BooksList;
