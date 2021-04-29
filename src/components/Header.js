import React from 'react';

const Header = () => {
  return (
    <div className="grid grid-cols-2 gap-6 pt-12 pb-14">
      <div className="flex flex-col font-bold">
        <span className="text-gray-900 text-3xl">Rick&amp;Morty API</span>
        <span className="text-blue-500 text-xl">by @sifloz</span>
      </div>
      <div className="flex justify-end items-center h-full">
        <a href="https://github.com/sifloz">
          <img className="h-6 max-h-6" src="https://github.githubassets.com/images/modules/logos_page/GitHub-Logo.png" alt="Github" />
        </a>
      </div>
    </div>
  );
};

export default Header;