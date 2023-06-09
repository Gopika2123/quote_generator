import React,{useState,useEffect} from 'react';
// import axios from 'axios';
// import Navbar from './Components/Navbar' 
// import './App.css';
import './Home.css';
import bm from '../bm.png';
import hm from '../hm.png';
import star from '../star.png';
import Bookmark from './Bookmark';

const Quotes = () => {
    const [quote, setQuote] = useState('');
    const [author, setAuthor] = useState('');
  
    useEffect(() => {
      getQuote()
    }, []);
  
    const getQuote = () => {
      let url = `https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json`;
      fetch(url)
        .then(res => res.json())
        .then(data => {
          let dataQuotes = data.quotes;
          let randomNum = Math.floor(Math.random() * dataQuotes.length);
          let randomQuote = dataQuotes[randomNum];
  
          setQuote(randomQuote.quote);
          setAuthor(randomQuote.author);
        })
    }
  
    const handleClick = () => {
      getQuote();
    }

    // const handleAddBookmark=(quote,author)=>{
    //     localStorage.setItem(quote)
    //     localStorage.setItem(author)

    
    
   return(
        <div id='quote-box'>
        <a href='/' id='hm'>
          <span><img src={hm} alt="" /></span>
                    </a>
                    <a href='/Bookmark' id='bookm'>
                        <span><img src={bm} alt="" /></span>
                    </a>

            <div id='text'><p>{quote}</p></div>
            <div id='author'><p>{author}</p></div>
            <div id='buttons'>
                <div className='bookmark'>
                    {/* <a href='#' id='bookm'> */}
                        <span><img src={star} alt="" /></span>
                    {/* </a> */}
                    <button onClick={handleClick} id="new-quote">New Quote</button>
                              

                </div>

            </div>
        </div>
    )
    }

export default Quotes;