import React, { useState } from 'react'
import { Button, Card } from 'flowbite-react';
import axios from 'axios';

export default function QuoteCard() {
  const [quote, setQuote]= useState("Patience is the companion of wisdom.");
  const [author, setAuthor]=useState("Augustine of Hippo")

  const getQuote =()=>{
    axios.get("https://api.quotable.io/random").then((response) =>{
       setQuote(response.data.content );
       setAuthor(response.data.author);
    });
  };
  return (

    <div className='flex flex-col gap-2 justify-center items-center' style={{marginTop:'7em'}}>
      <h1  className="font-bold text-teal">QUOTES GENERATOR</h1>
    <Card className="max-w-sm  " >
      <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white italic">
        <p>
         {quote}
        </p>
      </h5>
      <p className="font-normal text-gray-700 dark:text-gray-400 italic">
        <p>
          {author}
        </p>
      </p>
      <Button onClick={getQuote}>
        <p>
        New Quote
        </p>
        {/* <SeeSourceCodeForSVG /> */}
      </Button>
    </Card>
    </div>
  )
}



