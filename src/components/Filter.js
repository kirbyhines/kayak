/** @format */

import React from 'react';

function Filter({ onInputChange }) {
  return (
    <div className="bg-[#f9fafb] pl-[94px]">
      <h1 className="pt-[67px] pb-[73px] text-[44px] font-black">Airlines</h1>
      <h5 className="text-[16px] font-bold text-[#192024] pb-[23px]">
        Filter by Alliances
      </h5>

      <div className="flex flex-row pb-[56px]">
        <div className="flex flex-row">
          <input
            type="checkbox"
            className="w-[20px] h-[20px]"
            onChange={onInputChange}
            value="ow"
          />

          <p className="text-[14px] font-normal text-[#192024] pl-[10px] pr-[24px]">
            OneWorld
          </p>
        </div>
        <div className="flex flex-row">
          <input
            type="checkbox"
            className="w-[20px] h-[20px]"
            onChange={onInputChange}
            value="st"
          />

          <p className="text-[14px] font-normal text-[#192024] pl-[10px] pr-[24px]">
            Sky Team
          </p>
        </div>
        <div className="flex flex-row">
          <input
            type="checkbox"
            className="w-[20px] h-[20px]"
            onChange={onInputChange}
            value="sa"
          />

          <p className="text-[14px] font-normal text-[#192024] pl-[10px] pr-[24px]">
            Star Alliance
          </p>
        </div>
      </div>
    </div>
  );
}

export default Filter;
