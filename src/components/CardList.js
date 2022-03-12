/** @format */

import React from 'react';
import Card from './Card';

const CardList = ({ filteredAirlines }) => {
  // Map through array of Airline Data
  const cardComponent = filteredAirlines.map((airline, i) => {
    return (
      <Card
        key={i}
        name={airline.name}
        logoURL={airline.logoURL}
        phone={airline.phone}
        site={airline.site}
        alliance={airline.alliance}
        code={airline.code}
      />
    );
  });

  return (
    <div className="bg-[#f9fafb]  grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 grid-flow-row gap-[18px] place-items-stretch px-[94px]">
      {cardComponent}
    </div>
  );
};

export default CardList;
