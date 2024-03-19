import React, { useEffect, useState } from 'react';
import Header from "../components/Header";
import axios from "axios";
import "../stylesheet/Home.css"

const Home = () => {
  const [books, setBooks] = useState([]);
 

  const getBooks = async () => {
    try {
      const response = await axios.get("https://novelnest-7c5j.onrender.com/");
      setBooks(response.data.data); // Assuming response.data is an array of books
    } catch (err) {
      console.log("Error while fetching data", err);
    }
  };

  useEffect(() => {
    getBooks();
  }, []);

  return (
    <>
      <div className='app'>
        <Header />
        <section className='bookdetail'>
      {
books.map((items,index)=>(
  <>
  <div className='card'>
  <h1>{items.bookname}</h1>
  <p>{items.booktype}</p>
  <p>{`Author:${items.authorname}`}</p>
  </div>
  
  </>
 
))
      }
        </section>
      </div>
    </>
  );
};

export default Home;
