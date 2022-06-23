import { Button } from '@mui/material';
import React, { useEffect, useState } from 'react';


import './App.css';
import News from './Components/News';

function App() {

  const[articles,setArticles] =useState([]);

  useEffect(()=>{
    const url ='https://newsapi.org/v2/everything?q=tesla&from=2022-05-22&sortBy=publishedAt&apiKey=de0e722d7b77482bab9a227fad294f05'
    fetch(url)
    .then(res => res.json())
    .then(data => {
      setArticles(data.articles)
      console.log("fetch",data)
    })
  }
  ,[])

  return (
    <div>
      <h2>Headlines:{articles.length}</h2>
      {
        articles.map(article => <News article={article}></News>)
      }
      <Button> variant="contained" color="success"
      Success</Button>
      <News></News>
    </div>
  );
}

export default App;
