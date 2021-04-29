import React from 'react';

const Card = ({character}) => {
  return (
    <div className="flex flex-col justify-center items-center px-5 py-6 bg-white rounded-xl">
      <div className={`flex flex-row justify-center items-center p-2 mb-5 rounded-full border-2 ${character.gender.toLowerCase() === 'male' ? 'border-blue-500' : character.gender.toLowerCase() === 'female' ? 'border-pink-500' : 'border-gray-500'}`}>
        <img className="w-28 h-28 max-w-28 max-h-28 rounded-full" src={character.image} alt={character.name} />
      </div>
      <div className="flex flex-col justify-center items-center p-0">
        <div className="flex flex-col items-start p-0 mb-3">
          <div className="text-base text-center font-medium">{ character.name }</div>
        </div>
        <div className="flex flex-row justify-center items-center p-0 mb-3">
          <div className="text-sm text-gray-700">{ character.species }</div>
        </div>
        <div className="flex flex-row justify-center items-center p-0">
          <div className={`w-2 h-2 max-w-2 max-h-2 rounded-full mr-1 ${character.status.toLowerCase() === 'alive' ? 'bg-green-600' : character.status.toLowerCase() === 'dead' ? 'bg-red-600' : 'bg-gray-600'}`} />
          <div className="text-xs text-gray-500">
            { character.status }
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;