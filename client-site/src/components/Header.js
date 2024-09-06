import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { login, logout } from '../store/reducers/authSlice';

const Header = () => {
  const Gstate = useSelector(Gstate=>Gstate);
  const {auth,book} = Gstate;
  const {errorFetchDate} = book;
  console.log(Gstate)

  const dispatch = useDispatch();
  const handelAuth = (e)=>{
    e.preventDefault();
    if(!auth.isAuthenticated){
      dispatch(login())
    }else{
      dispatch(logout())
    }
  }
  return (
    <>
    {errorFetchDate&&(
      <div className="alert alert-danger mb-0" role="alert">
        {errorFetchDate}
      </div>
    )}
    <nav className='navbar navbar-dark bg-dark'>
      <span className='navbar-brand mb-0 h1'>My Books</span>
      <button className='btn btn-outline-primary' onClick={handelAuth} type='submit'>
        {!auth.isAuthenticated? "Log In": "Log Out"}
        </button>
        <span style={{position:"absolute" , right: "150px" , color:"#fff"}}>{auth.isAuthenticated&&auth.user}</span>
    </nav>
    </>
  );
};

export default Header;
