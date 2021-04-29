import React from 'react';

const ErrorDisplay = ({ error }) => {
  return (
    <div className="grid grid-cols-1 py-12">
      <div className="flex flex-col justify-center">
        <span className="material-icons text-4xl text-gray-600 text-center">sentiment_very_dissatisfied</span>
        {
          error.type &&
          <div className="font-bold text-2xl text-center text-gray-600">
            { error.type }
          </div>
        }
        <div className="font-base text-xl text-center text-gray-600">
          { error.message }
        </div>
      </div>    
    </div>
  );
};

export default ErrorDisplay;