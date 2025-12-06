import './Stars.css';
import Star from './Star.tsx';
import uniqid from 'uniqid';

type Props = {
    count: number;
  };

function Stars({ count }: Props) {

  const conditionCount = count > 5 || count < 1;

  return conditionCount ? null : (
    <ul className='card-body-stars u-clearfix'>
      {[...new Array(count)].map(() => (<Star key={uniqid()} />))}
    </ul>
  );
};

export default Stars;
