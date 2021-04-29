import React from 'react';

const Card = ({character}) => {
  return (
    <div className="flex flex-col justify-start items-center px-5 py-6 bg-white rounded-xl h-full hover:shadow-xl cursor-pointer transition delay-50 duration-300 ease-in-out">
      <div className={`flex flex-row justify-center items-center p-2 mb-5 rounded-full border-2 ${character.gender.toLowerCase() === 'male' ? 'border-blue-500' : character.gender.toLowerCase() === 'female' ? 'border-pink-500' : 'border-gray-500'}`}>
        <img className="w-24 h-24 max-w-24 max-h-24 rounded-full" src={character.image} alt={character.name} />
      </div>
      <div className="flex flex-col justify-center items-center p-0">
        <div className="flex flex-col items-start p-0 mb-3">
          <div className="text-base text-center font-medium">{ character.name }</div>
        </div>
        <div className="flex flex-row justify-center items-center p-0 mb-3">
          <div className="text-sm text-gray-700 capitalize">{ character.species }</div>
        </div>
        <div className="flex flex-row justify-center items-center p-0">
          <div className={`w-2 h-2 max-w-2 max-h-2 rounded-full mr-1 ${character.status.toLowerCase() === 'alive' ? 'bg-green-600' : character.status.toLowerCase() === 'dead' ? 'bg-red-600' : 'bg-gray-600'}`} />
          <div className="text-xs text-gray-500 capitalize">
            { character.status }
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;