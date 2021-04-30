import React from 'react';
import PropTypes from 'prop-types';

const Card = ({ character, selectCharacterHandler }) => {
  return (
    <div className="group flex flex-col justify-start items-center px-5 py-6 bg-white rounded-xl h-full hover:shadow-xl cursor-pointer transition delay-50 duration-300 ease-in-out" onClick={() => selectCharacterHandler(character.id)}>
      <div className={`flex flex-row justify-center items-center p-2 my-5 rounded-full border-2 ${character.gender.toLowerCase() === 'male' ? 'border-blue-500' : character.gender.toLowerCase() === 'female' ? 'border-pink-500' : character.gender.toLowerCase() === 'genderless' ? 'border-yellow-500' : 'border-gray-500'}`}>
        <img className="w-24 h-24 max-w-24 max-h-24 rounded-full" src={character.image} alt={character.name} />
      </div>
      <div className="flex flex-col justify-center items-center p-0">
        <div className="flex flex-col items-start p-0 mb-3">
          <div className="text-base text-center font-medium text-blue-900 group-hover:text-gray-900">{ character.name }</div>
        </div>
        <div className="flex flex-row justify-center items-center p-0 mb-3">
          <div className="text-sm text-gray-700 capitalize group-hover:text-gray-800">{ character.species }</div>
        </div>
        <div className="flex flex-row justify-center items-center p-0">
          <div className={`w-2 h-2 max-w-2 max-h-2 rounded-full mr-1 ${character.status.toLowerCase() === 'alive' ? 'bg-morty-500' : character.status.toLowerCase() === 'dead' ? 'bg-red-500' : 'bg-gray-500'}`} />
          <div className="text-xs text-gray-500 capitalize group-hover:text-gray-600">
            { character.status }
          </div>
        </div>
      </div>
    </div>
  );
};

Card.propTypes = {
  character: PropTypes.object.isRequired
};

export default Card;