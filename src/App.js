import React, { Fragment, useEffect, useState, useRef } from 'react';
import { Dialog, Transition } from '@headlessui/react'
import axios from 'axios'
import Card from './components/Card';
import Header from './components/Header';
import Loader from './components/Loader';
import ErrorDisplay from './components/ErrorDisplay';
import CharacterDetailsCard from './components/CharacterDetailsCard';
import { PreviousMap } from 'postcss';
import Modal from './components/Modal';

function App() {

  const [appState, setAppState] = useState({
    loading: false,
    loadingCharacter: false,
    info: {
      count: 0,
      pages: 1,
      next: null,
      prev: null
    },
    characters: [],
    character: null,
    doneFetching: false,
    error: {
      status: false,
      type: null,
      message: null
    }
  })
  const [page, setPage] = useState(0)
  const [openCharacter, setOpenCharacter] = useState(false)
  const cancelButtonRef = useRef(null)
  const loader = useRef(null) // Create reference to use as an intersection observer

  const getCharacters = async () => {
    await setAppState({...appState, loading: true})
    await axios.get(`https://rickandmortyapi.com/api/character?page=${page}`)
          .then(res => {
            setAppState({
              ...appState,
              loading: false,
              info: res.data.info,
              characters: appState.characters.concat(res.data.results),
              doneFetching: res.data.info && !res.data.info.next,
              error: {
                status: false,
                type: null,
                message: null
              }
            })
          }).catch(err => {
            setAppState({
              ...appState,
              loading: false,
              error: {
                status: true,
                type: err.response ? err.response.status : null,
                message: err.response ? err.response.data : err.request ? JSON.stringify(err.request) : err.message ? JSON.stringify(err.message) : 'An error has ocurred. Please refresh the page.'
              }
            })
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

  const fetchCharacter = async (characterId) => {
    await setAppState({...appState, loadingCharacter: true})
    await axios.get(`https://rickandmortyapi.com/api/character/${characterId}`)
      .then(res => {
        console.log(res)
        setAppState({
          ...appState,
          loadingCharacter: false,
          character: res.data
        })
      }).catch(err => {
        setAppState({
          ...appState,
          loadingCharacter: false
        })
      })
  }

  const selectCharacterHandler = async (id) => {
    await setAppState({
      ...appState,
      character: null
    })
    await setOpenCharacter(!openCharacter)
    await fetchCharacter(id)
  }

  return (
    <div className="container mx-auto px-7 bg-gray-100 md:px-28 lg:px-32">
      <Header />
      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {
          appState.characters.map((character, index) => (
            <div key={index}>
              <Card character={character} selectCharacterHandler={selectCharacterHandler} />
            </div>
          ))
        }
      </div>
      {
        appState.error.status ?
          <ErrorDisplay error={appState.error} />
        :
        <div className="grid grid-cols-1">
          <div className="flex justify-center items-center w-full pt-16 pb-24">
            {
              appState.doneFetching ?
              <div className="flex flex-row justify-center items-center">
                <span className="material-icons text-4xl text-gray-600 mr-3">sentiment_very_satisfied</span>
                <span className="text-xl text-gray-600">All characters were loaded</span>
              </div>
              :
              <div className="flex justify-center items-center" ref={loader}>
                <Loader loading={appState.loading} />
              </div>
            }
          </div>
        </div>
      }
      {
        (!appState.loadingCharacter && appState.character) &&
        <Modal ref={cancelButtonRef} open={openCharacter} toggle={setOpenCharacter}>
          <CharacterDetailsCard character={appState.character} />
          <div className="bg-white px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
            <button type="button" className="mt-3 w-full inline-flex justify-center rounded-md border border-blue-400 shadow-sm px-4 py-2 bg-white text-base font-medium text-blue-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm" onClick={() => setOpenCharacter(false)} ref={cancelButtonRef}>
              OK
            </button>
          </div>
        </Modal>
      }
    </div>
  );
}

export default App;
