import React, {useEffect, useState, useRef} from 'react';
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
    characters: []
  })
  const [page, setPage] = useState(1)
  const loader = useRef(null) // Create reference to use as an intersection observer

  const getCharacters = async () => {
    setAppState({...appState, loading: true})
    await axios.get(`https://rickandmortyapi.com/api/character?page=${page}`)
          .then(res => {
            console.log(res)
            setAppState({...appState, loading: false, info: res.data.info, characters: appState.characters.concat(res.data.results) })
          }).catch(err => {
            setAppState({...appState, loading: false})
          })
  }

  useEffect(() => {
    const options = {
       root: null,
       rootMargin: "20px",
       threshold: 1.0
    }
    // Define observer which triggers character fetching
    const observer = new IntersectionObserver(handleObserver, options);
    if (loader.current) {
       observer.observe(loader.current)
    }
  }, [])

  useEffect(async () => {
    //On every page increment fetch & propagate characters
    await getCharacters()
  }, [page])

  const handleObserver = (entities) => {
    const target = entities[0];
    if (target.isIntersecting) {   
        setPage((page) => page + 1)
    }
  }

  return (
    <div className="App">
      <div>
        <ul>
          {
            appState.characters.map((character, index) => (
              <li key={index}>
                  <h2>{character.name}</h2>
              </li>
            ))
          }
        </ul>
        <div ref={loader}>
          <h2>Load More</h2>
        </div>
      </div>
    </div>
  );
}

export default App;
