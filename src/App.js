import './App.css';
import React from 'react';
import useFetch from "./hooks/useFetch";


function App() {
  const { data, loading, error } = useFetch(
    "https://swapi.dev/api/people/1",
     (response) => console.log(response)
  )
  return (
    <div className="App">
     {loading ? <p>loading</p> : error ? <p>{error}</p> : JSON.stringify(data)}
    </div>
  );
}

export default App; 


