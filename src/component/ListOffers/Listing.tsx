import Offer from './Offer.tsx';
// import uniqid from 'uniqid';

interface  ItemProps {
  listing_id: number,
  url: string,
  MainImage: {url_570xN: string},
  title: string,
  currency_code: string,
  price: string,
  quantity: number
}

type props = {
  items : [ItemProps]
}

function Listing({items} : props) {

//   console.log(items);
//   console.log(items[0].listing_id);
//   items.forEach(function(elem, ind) { console.log(elem, ind); });

  return (
    <>
      {items.map(item => <Offer key={item.listing_id} item = {item}/>)}
    </>
  );
};

export default Listing;