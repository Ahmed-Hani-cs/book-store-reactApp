import React, { Fragment} from 'react';

import Header from './components/Header';
import Container from './components/Container';
import AddForm from './components/AddForm';
import BookContainer from './components/Book/BookContainer';
import { useSelector } from 'react-redux';
import './App.css'

const App = () => {
  const {auth} = useSelector(Gstate=>Gstate)
  return (
    <Fragment>
      <Header/>
      <div  className="App-container">
      {!auth.isAuthenticated&&<div className='OverLay'></div> }
      <Container>
          <AddForm />
          <BookContainer />
      </Container>
      </div>
      
    </Fragment>
  );
};

export default App;
