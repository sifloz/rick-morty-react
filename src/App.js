import React, {useEffect, useState, useRef} from 'react';
import logo from './logo.svg';
import axios from 'axios'
import { info } from 'autoprefixer';
import Card from './components/Card';
import Header from './components/Header';

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
    <div className="container mx-auto px-7 bg-gray-100 md:px-28 lg:px-32">
      <Header />
      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {
          appState.characters.map((character, index) => (
            <div key={index}>
              <Card character={character} />
            </div>
          ))
        }
      </div>
      <div ref={loader}>
        <h2>Load More</h2>
      </div>
    </div>
  );
}

export default App;
