// import { useState } from 'react';
import './ListOffers.css';
import './css/main.css';

import Listing from './Listing.tsx';

import json from "./data/etsy.json";

function ListOffers() {
  // const [state, setState] = useState(0);

  const offers = JSON.parse(JSON.stringify(json));

  return (
    <>
      <div className='listOffers'>
        <Listing items={offers}/>
      </div>
    </>
  );
};

export default ListOffers;