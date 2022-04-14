import { useParams, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';

const Singlepage = () => {
  const { id } = useParams();
  const [post, setPost] = useState(null);

  const navigate = useNavigate();
  const goBack = () => navigate(-1);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then((res) => res.json())
      .then((data) => setPost(data));
  }, [id]);

  return (
    <div>
      <button className='button' onClick={goBack}>
        Go Back
      </button>
      {post && (
        <>
          <h1>{post.title}</h1>
          <p>{post.body}</p>
        </>
      )}
    </div>
  );
};

export { Singlepage };
