import { useState } from 'react';
import './Stars.css';
// import projects from './projects.js';
// import Toolbar from './Toolbar.jsx';
// import ProjectList from './ProjectList.jsx';
import './Stars.css';
import Star from './Star';

function Stars() {
  const [count, setCount] = useState(0);

  return (
    <div className='card-body-stars u-clearfix'>
      <Star count={1} />
    </div>
  );
};

export default Stars;
