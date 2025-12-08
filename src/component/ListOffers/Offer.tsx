
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



const Offer: React.FC<props> = ({
  item: {url, MainImage, title, currency_code, price, quantity }
}) => {
  console.log(typeof title);

  // const titleOffer = (title: string) => {
  //   if (title.length > 50) {
  //     console.log(title);
  //     return title.slice(50) + '...';
  //   };
  // };

//   console.log(url);
//   console.log(MainImage.url_570xN);

  return (
    <div className="item">
      <div className="item-image">
        <a href={url}>
          <img src={MainImage.url_570xN} alt = {title}/>
        </a>
      </div>
        <div className="item-details">
          <p className="item-title">{title}</p>
          <p className="item-price">{price}</p>
          <p className={`item-quantity ${quantity}`}>{quantity} left</p>
        </div>
    </div>
  )
}
export default Offer;