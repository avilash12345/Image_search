import React, { useState, useEffect } from 'react';
import './App.css';
import Image from './Image'

function App() {

  //https://pixabay.com/api/?key=${API_KEY}&q=${input.value}&image_type=photo

  
  const API_KEY=process.env.REACT_APP_API_KEY

  const [data, setData] = useState('flower');
  const [result, setResult] = useState([]);

  useEffect(() => { getdata() }, [])

  const getdata = async () => {
    const res = await fetch(`https://pixabay.com/api/?key=${API_KEY}&q=${data}&image_type=photo`)
    const showdata = await res.json();
    console.log(showdata.hits)
    setResult(showdata.hits)
  }
  const updatedata = (e) => {
    setData(e.target.value)
  }



  return (
    <>
      <div className="App">
        <h1 className='fd2'><span className='fd'>IMAGE</span> SEARCH <span className='fd1'>APP</span></h1>
        <div className="input-group mb-3">
          <div className="container">
            <input type="text" className="form-control text-center" placeholder="Find Recipes Name Here..." aria-label="Recipient's username" aria-describedby="button-addon2" onChange={updatedata} id='input' />
            <button className="btn btn-outline-primary mb-2" type="button" id="button-addon2" onClick={getdata}>Search</button>
          </div>
        </div>
      </div><br />
      <div className="main3">
        {result.map(item => (
          <Image key={item.webformatURL}
            Image={item.webformatURL}
            Url={item.largeImageURL}
          />
        ))}
      </div>
    </>
  );
}

export default App;
