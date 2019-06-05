import React, {useState} from 'react';

const FavouriteToggle = ({ style = {} }) => {
  const [isActive, setActive] = useState(false);

  /*
  useEffect( () => {
    setActive(`${isActive}`)
    }
  );*/

  const handleClick = () => {
    setActive(!isActive);
  }

  return (<span style={style} onClick={handleClick}>{isActive ? '♥️' : '♡'}</span>)
};

export default FavouriteToggle;
