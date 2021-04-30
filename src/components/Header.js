import React from 'react';

const Header = () => {
  return (
    <div className="grid grid-cols-4 gap-6 pt-12 pb-14">
      <div className="col-span-3 md:col-span-2 lg:col-span-2 flex flex-col font-bold">
        <span className="text-gray-900 text-3xl">Rick&amp;Morty API</span>
        <span className="text-blue-500 text-xl">by @sifloz</span>
      </div>
      <div className="col-span-1 md:col-span-2 lg:col-span-2 flex justify-end items-center h-full">
        <a href="https://github.com/sifloz/rick-morty-react">
          <img className="h-3.5 max-h-3.5 md:h-4 md:max-h-4" src="https://github.githubassets.com/images/modules/logos_page/GitHub-Logo.png" alt="Github" />
        </a>
      </div>
    </div>
  );
};

export default Header;