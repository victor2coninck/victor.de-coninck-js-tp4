import React, {useState} from 'react';
import FavouriteToggle from './FavouriteToggle';

const Post = ({ data }) => {
  const [content, setContent] = useState(data.title);

  const handleClick = () => {
    if (content === data.title)
      setContent(data.body);
    else
      setContent(data.title);
  }

  return (
  <li
    style={{
      backgroundColor: 'white',
      color: '#333',
      margin: '5px',
      padding: '10px',
      fontSize: '11pt',
      cursor: 'pointer'
    }}
  >
    <span onClick={handleClick} style={{ fontWeight: '900' }}>{content}</span>

    <FavouriteToggle style={{ float: 'right' }} />
  </li>
  );
}

export default Post;
