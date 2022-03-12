/** @format */

import React, { useState } from 'react';

function Card({ name, logoURL, phone, site, alliance, code }) {
  const url = 'https://kayak.com';
  const starAlliance = 'Star Alliance';
  const oneWorld = 'Oneworld';
  const skyTeam = 'Sky Team';
  const none = '';

  const [isShown, setIsShown] = useState(false);

  if (alliance === 'SA') {
    alliance = starAlliance;
  } else if (alliance === 'OW') {
    alliance = oneWorld;
  } else if (alliance === 'ST') {
    alliance = skyTeam;
  } else {
    alliance = none;
  }

  return (
    <div>
      <div
        className="h-[240px] w-[300px] bg-white rounded-[8px]  shadow-[0_3px_6px_0_rgba(25,32,36,0.16)] border-2 flex flex-col justify-center items-center"
        onMouseEnter={() => setIsShown(true)}
        onMouseLeave={() => setIsShown(false)}
      >
        <div className=" flex flex-row items-center">
          <img src={url + logoURL} alt="" className="h-[32px] w-[32px]" />
          <div className="flex flex-col items-start justify-start pl-[18px] ">
            <h1 className=" text-[16px] font-bold text-[#192024]">{name}</h1>
            {isShown && (
              <div className="">
                <div className="flex flex-col items-start justify-start ">
                  <p className="text-[14px] font-normal text-[#192024]">
                    {alliance}
                  </p>
                  <p>{phone}</p>
                  <p className="text-[14px] text-[#5a6872] font-normal">
                    {site}
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
