// import { useState } from 'react';
import './css/main.css';
import './ListOffers.css';


import Listing from './Listing.tsx';

import json from "./data/etsy.json";

function ListOffers() {
  // const [state, setState] = useState(0);

  const offers = JSON.parse(JSON.stringify(json))
    .filter((elem:{url: undefined}) => elem.url !== undefined);

  return (
    <>
      <div className='listOffers'>
        <Listing items={offers}/>
      </div>
    </>
  );
};

export default ListOffers;