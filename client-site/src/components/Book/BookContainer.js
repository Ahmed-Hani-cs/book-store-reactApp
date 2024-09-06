import React, { Fragment, useEffect } from 'react';
import BookInfo from './BookInfo';
import BooksList from './BooksList';

import './book.css';
import { useSelector,useDispatch } from 'react-redux';
import { fetchBook } from '../../store/reducers/bookSlice';

const PostContainer = () => {
  const dispatch = useDispatch()
  const GState = useSelector(state => state.book);

  useEffect(() => {
    dispatch(fetchBook());
  }, [dispatch])
  return (
    <Fragment>
      <hr className='my-5' />
      <div className='row'>
        <div className='col'>
          <BooksList loading={GState.isLoading} books={GState.books} />
        </div>
        <div className='col side-line'>
          <BookInfo />
        </div>
      </div>
    </Fragment>
  );
};

export default PostContainer;
