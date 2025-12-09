
interface  Item {
  listing_id: number,
  url: string,
  MainImage: {url_570xN: string},
  title: string,
  currency_code: string,
  price: string,
  quantity: number
};

type props = {
  item : Item
};

const titleOffer = (title: string) => {
  if (title.length > 50) {
    return title.slice(50) + ' ...';
  };
};
// {`btnFilter ${item === selected && 'black-wheat'}`}
const currencyAndPrice = (currency_code: string, price: string) => {
  if (currency_code === 'USD') {return '$' + price};
  if (currency_code === 'EUR') {return '€' + price}; 
  return currency_code + ' ' + price;
};

const classFromQuantity = (quantity: number) => {
  if (quantity <= 10) {return 'level-low'} 
  else if (quantity <= 20) {return 'level-medium'} 
  else {return 'level-high'};  
}

const Offer: React.FC<props> = ({item: {url, MainImage, title, currency_code, price, quantity}
  }) => {

  return (
    <div className='item'>
      <div className='item-image'>
        <a href={url}>
          <img src={MainImage.url_570xN} alt = {title}/>
        </a>
      </div>
      <div className='item-details'>
        <p className='item-title'>{titleOffer(title)}</p>
        <p className='item-price'>{currencyAndPrice(currency_code, price)}</p>
        <p className={`item-quantity ${classFromQuantity(quantity)}`}>{quantity} left</p>
      </div>
    </div>
  )
}

export default Offer;
