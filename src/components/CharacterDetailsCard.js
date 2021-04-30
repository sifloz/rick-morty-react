import React from 'react';

const CharacterDetailsCard = ({ character }) => {
  return (
    <div className="flex flex-col items-center bg-white rounded-xl max-h-screen">
      <div className="flex flex-col items-start w-full p-0">
        <div className="flex flex-row items-center w-full py-6 px-5">
          <div className="flex flex-row justify-center items-center w-32 max-w-32 h-32 max-h-32 p-2 mr-5">
            <img className="rounded-full" src={ character.image } alt="Character" />
          </div>
          <div className="flex flex-col justify-center items-center">
            <div className="flex flex-col w-full items-start p-0">
              <div className="font-bold text-xl text-gray-900">
                {character.name}
              </div>
            </div>
            <div className="flex flex-row w-full justify-center items-start p-0">
              <div className="text-base w-full font-16 text-gray-700 capitalize ">
                { character.species }
              </div>
            </div>
            <div className="flex flex-row w-full items-center p-0">
              <div className="flex flex-row items-center p-0 mr-4">
                <div className={`w-2 h-2 max-w-2 max-h-2 rounded-full mr-1 ${character.status.toLowerCase() === 'alive' ? 'bg-morty-500' : character.status.toLowerCase() === 'dead' ? 'bg-red-500' : 'bg-gray-500'}`} />
                <div className="text-sm text-gray-500 capitalize group-hover:text-gray-600">
                  { character.status }
                </div>
              </div>
              <div className="flex flex-row items-center p-0">
                <div className={`w-2 h-2 max-w-2 max-h-2 rounded-full mr-1 ${character.gender.toLowerCase() === 'male' ? 'bg-blue-500' : character.gender.toLowerCase() === 'female' ? 'bg-pink-500' : character.gender.toLowerCase() === 'genderless' ? 'bg-yellow-500' : 'bg-gray-500'}`} />
                <div className="text-sm text-gray-500 capitalize group-hover:text-gray-600">
                  { character.gender }
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-start w-full p-0">
        <div className="flex flex-col w-full items-start p-0">
          <div className="flex flex-row items-start w-full py-0 px-7">
            <div className="grid grid-cols-2 gap-6 w-full">
              <div className="flex flex-col items-start p-0">
                <div className="font-bold text-gray-900">Origin</div>
                <div className="text-base text-gray-600 capitalize">{ character.origin.name }</div>
              </div>
              <div className="flex flex-col items-start p-0">
                <div className="font-bold text-gray-900">Location</div>
                <div className="text-base text-gray-600 capitalize ">{ character.location.name }</div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-start w-full pt-6 px-7 pb-2">
          <div className="flex flex-row items-start text-gray-900 py-2 mb-2 px-0">
            Episodes ({ character.episode.length })
          </div>
          {
            (character.episodes && character.episodes.length > 0) &&
            <ul className="flex flex-col w-full max-h-72 overflow-y-scroll">
              {
                character.episodes.map((episode, episodeIndex) => (
                  <li key={episodeIndex} className="flex flex-row py-3 px-4 rounded-lg bg-gray-200 mb-4">
                    <p className="text-gray-700 truncate">
                      { episode.episode } - { episode.name }
                    </p>
                  </li>
                ))
              }
            </ul>
          }
        </div>
      </div>
    </div>
  );
};

export default CharacterDetailsCard;