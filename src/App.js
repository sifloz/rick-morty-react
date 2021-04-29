import React, {useEffect, useState} from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios'
import { info } from 'autoprefixer';

function App() {

  const [appState, setAppState] = useState({
    loading: false,
    info: {
      count: 0,
      pages: 1,
      next: null,
      prev: null
    },
    characters: [],
    currentPage: 0
  })

  useEffect(() => {
    console.log('Loading')
    setAppState({...appState, loading: true})
    axios.get('https://rickandmortyapi.com/api/character')
      .then(res => {
        console.log(res)
        setAppState({...appState, loading: false, info: res.data.info, characters: res.data.results })
      }).catch(err => {
        setAppState({...appState, loading: false})
      })
  }, [setAppState])

  const doSomething = () => {
    console.log('A')
    setAppState({...appState, currentPage: appState.currentPage + 1})
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <button onClick={doSomething}>CLick</button>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
