import React, { useState } from 'react';
import "../stylesheet/Addbook.css";
import Header from '../components/Header';
import axios from 'axios';

import { useNavigate } from 'react-router-dom';



const Addbook = () => {

    const navigate = useNavigate();

    const [book,setBook] = useState({});
  

    const handleChange = (e) => {
        const { name, value } = e.target;
        setBook(prevState => ({
            ...prevState,
            [name]: value
        }));
    }
    
    const Bookdata= async ()=>{
        try{
            const data =await  axios.post("https://novelnest-7c5j.onrender.com/addbook",book);
            navigate("/");
           
        }catch(err){
console.log('Error while adding Book',err);
        }
        
    
    }


    const handleSubmit=(e)=>{
        e.preventDefault();
        Bookdata();

    }
  return (
    <>
    <Header bookdata={book}/>
        <div className='addbook'>
        <section>
        <form onSubmit={handleSubmit}>
            <label>Enter bookName</label>
            <input type='text' placeholder='Book name....' onChange={handleChange} name='bookname'/>
            <label>Enter type </label>
            <input type='text' placeholder='Book type....' onChange={handleChange} name='booktype'/>
            <label>Enter auuthor name</label>
            <input type='text' placeholder='Author name....' onChange={handleChange} name='authorname'/>
        
            <input type='submit' value="Submit" className='submitBtn'/>
            <section>
   
</section>

        </form>

        </section>
    </div>
    </>
    
  )
}

export default Addbook