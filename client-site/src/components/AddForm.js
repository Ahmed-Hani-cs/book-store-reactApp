import React, { useRef, useState } from 'react';
import { useDispatch } from 'react-redux';
import { insertBook } from '../store/reducers/bookSlice';


const Addform = () => {
  const [img,setImg]=useState(null);
  const dispatch = useDispatch();
  const bookName = useRef(null),
  bookAuther = useRef(null),
  bookPrice = useRef(null),
  bookdDisc = useRef(null),
  imgInput = useRef(null);

  const handelImageChange = (event)=>{
    const file = event.target.files[0];
    if(file){
      const reader = new FileReader();
      reader.onloadend=()=>{
        setImg(reader.result);
      }
      reader.readAsDataURL(file);
    }
  }
  const handelInsertBookToApi=(e)=>{
    e.preventDefault();
    const book =   {
      "id": Date.now().toString(),
      "bookName": bookName.current.value,
      "author": bookAuther.current.value,
      "price": bookPrice.current.value,
      "description": bookdDisc.current.value,
      "image":img
    };
    dispatch(insertBook(book));
    // Reset input fields
    bookName.current.value = '';
    bookAuther.current.value = '';
    bookPrice.current.value = '';
    bookdDisc.current.value = '';
    setImg(null);
    imgInput.current.value = '';
  }
  return (
    <div className='row'>
      <div className='col-6 offset-3 mt-3'>
        <h2>Insert Book</h2>
        <form onSubmit={(e) => handelInsertBookToApi(e)}>
          <div className='form-group'>
            <label htmlFor='title'>Title</label> 
            <input type='text' className='form-control' id='title' ref={bookName} required/>
          </div>
          <div className='form-group'>
            <label htmlFor='price'>Price</label>
            <input type='number' className='form-control' id='price' ref={bookPrice} required/>
          </div>
          <div className='form-group'>
            <label htmlFor='author'>author</label>
            <input type='text' className='form-control' id='author' ref={bookAuther} required/>
          </div>
          <div className='form-group'>
            <div class="d-grid">
              <button onClick={()=>{imgInput.current.click()}} className={`btn col col-12 ${img ? 'btn-success' : 'btn-outline-info'}`} type="button" >{img ? <>Image Selected</> : ' Add book cover image '} </button>
            </div>
            <input className="form-control" ref={imgInput} style={{display:"none"}} type="file" id="formFileDisabled" accept="image/*" onChange={handelImageChange} />
          </div>
          <div className='form-group'>
            <label htmlFor='Description'>Description</label>
            <textarea
              className='form-control'
              id='Description'
              rows='3'
              ref={bookdDisc}
            ></textarea>
          </div>
          <button type='submit' className='btn btn-primary'>
            Add Book
          </button>
        </form>
      </div>
    </div>
  );
};

export default Addform;
