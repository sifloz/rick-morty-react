import React from 'react';

const Filters = () => {
  return (
    <div className="grid grid-cols-12 gap-6 pb-10  h-full">
      <div className="col-span-5 flex items-center text-gray-900">
        All characters (671)
      </div>
      <div className="col-span-2 flex flex-col w-full">
        <label className="text-gray-700" htmlFor="status">Filter by status</label>
        <select className="form-select w-full bg-gray-200 rounded px-3 py-2" id="status">
          <option value="all">All</option>
          <option value="alive">Alive</option>
          <option value="dead">Dead</option>
          <option value="unknown">Unknown</option>
        </select>
      </div>
      <div className="col-span-2 flex flex-col w-full">
        <label className="text-gray-700" htmlFor="gender">Filter by gender</label>
        <select className="form-select w-full bg-gray-200 rounded px-3 py-2" id="gender">
          <option value="all">All</option>
          <option value="female">Female</option>
          <option value="male">Male</option>
          <option value="genderless">Genderless</option>
          <option value="unknown">Unknown</option>
        </select>
      </div>
      <div className="col-span-3 flex flex-col w-full">
        <label className="text-gray-700" htmlFor="search">Search character</label>
        <input type="text" className="form-input rounded w-full px-3 py-2" placeholder="Search" id="search" />
      </div>
    </div>
  );
};

export default Filters;