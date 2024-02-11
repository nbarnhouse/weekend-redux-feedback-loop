import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useState } from 'react';
import NextButton from '../NextButton/NextButton.jsx';

export default function Comments() {
  const dispatch = useDispatch();
  const history = useHistory();
  const [comments, setComments] = useState('');

  const handleInputChange = (event) => {
    setComments(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Dispatch an action with the customer information
    dispatch({
      type: 'SUBMIT_COMMENTS',
      payload: {
        comments,
      },
    });
    // Reset the form or navigate to the next step
    history.push('/review');
    setComments('');
  };

  return (
    <div className="form-spacing">
      <h1>Any comments you want to leave?</h1>
      <form onSubmit={handleSubmit}>
        <input
          data-testid="input"
          type="text"
          value={comments}
          onChange={handleInputChange}
        ></input>
        <NextButton />
      </form>
    </div>
  );
}
