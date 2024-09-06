import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"

const fetchBook = createAsyncThunk("book/fetchbook",async( _ , thunkApi)=>{
    const {rejectWithValue }=thunkApi; 
    try{
        const data = await fetch("http://localhost:3005/books");
        const books = await data.json()
        return books;
    }catch(error){
        error.message="error when fetch data"
        return rejectWithValue(error.message)
    }
})
//get one book info 
const getBookInfo  = createAsyncThunk("book/getBookInfo",async( id , thunkApi)=>{
    const {rejectWithValue} = thunkApi;
    try {
        const res = await fetch(`http://localhost:3005/books/${id}`);
        const book = await res.json();
        console.log(book);
        console.log(id);
        return book;
    } catch (error) {
        return rejectWithValue(error.message);
    }
})
// Thunk for Insert to api
const insertBook = createAsyncThunk("book/isertBook" , async(dataFromActionDispatch , thunkApi)=>{
    const {rejectWithValue , getState} = thunkApi;
    try {
        //post abook
        console.log(getState().auth.user)
        const res = await fetch("http://localhost:3005/books",{
            method:"POST",
            body:JSON.stringify(dataFromActionDispatch),
            headers:{  'Content-Type': 'application/json'},
        })
        const newBook = await res.json();
        console.log(newBook)
        return newBook;
    } catch (error) {
        return rejectWithValue(error.message)
    }
})
// Thunk for delete from api
const delBook = createAsyncThunk("book/delBook" , async(id , thunkApi)=>{
    const {rejectWithValue} = thunkApi;
    try {
        const res = await fetch(`http://localhost:3005/books/${id}`,{
            method: "DELETE",})
        const deletedBook = await res.json();
        console.log(JSON.stringify(deletedBook));
        return deletedBook; 
    } catch (error) {
        return rejectWithValue(error.message)
    }
})

const bookSlice = createSlice({
    name:"book",
    initialState: {books: [] , isLoading: false , errorFetchDate:null , readOneBook:null},
    reducers:{},
    extraReducers:{
        [fetchBook.pending]:(state , action)=>{
            state.books = [];
            state.isLoading = true;
            state.errorFetchDate=null;
            console.log(action)
        },
        [fetchBook.fulfilled]:(state , action)=>{
            state.books = action.payload;
            state.isLoading = false;
            console.log(action)
        },
        [fetchBook.rejected]:(state , action)=>{
            state.isLoading = false;
            state.errorFetchDate=action.payload;
            console.log(action)
        },

        //insertBook extra Actions
        [insertBook.pending]:(state , action)=>{
            state.isLoading = true;
            state.errorFetchDate=null;
        },
        [insertBook.fulfilled]:(state , action)=>{
            const newBook = action.payload;

            if(newBook.bookName!==""&&newBook.price!==""){
                state.books.push(newBook); 
            }else{
                console.log("Invalid book data")
            }
            state.isLoading = false;   
        },
        [insertBook.rejected]:(state , action)=>{
            state.isLoading = false;
            state.errorFetchDate=action.payload;
        },

        //deleteBook extra Action 
        [delBook.pending]:(state,action)=>{
            state.isLoading = true;
            state.errorFetchDate=null;
        },
        [delBook.fulfilled]:(state,action)=>{
            const delItem =action.payload
            if (state.readOneBook.id == delItem.id){
                state.readOneBook=null;
            }
            state.books = state.books.filter(book=>book.id!==delItem.id);
            state.isLoading=false;
        },
        [delBook.rejected]:(state,action)=>{
            state.isLoading = false;
            state.errorFetchDate=action.payload;
        },
        // getBookInfo
        [getBookInfo.pending]:(state,action)=>{
            state.isLoading = true;
            state.errorFetchDate=null;
            state.readOneBook = null;
        },
        [getBookInfo.fulfilled]:(state , action)=>{
            state.readOneBook = action.payload;
            state.isLoading = false;
        },
        [getBookInfo.rejected]:(state , action)=>{
            state.isLoading = false;
            state.errorFetchDate=action.payload;;
        }

    }
})

// export Async extra action
export {fetchBook , insertBook , delBook , getBookInfo};
export default bookSlice.reducer;