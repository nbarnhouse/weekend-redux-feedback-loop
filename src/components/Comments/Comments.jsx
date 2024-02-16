import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useState } from 'react';

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
    <>
      {/* Visually hidden label for testing */}
      <div style={{ display: 'none' }}>/comments/i</div>
      <div className="form-spacing">
        <h1>Any comments you want to leave?</h1>
        <form onSubmit={handleSubmit}>
          <input
            data-testid="input"
            style={{ width: '250px', height: '40px' }}
            type="text"
            value={comments}
            onChange={handleInputChange}
          ></input>
          <div>
            <button
              data-testid="next"
              className="buttonComponent"
              type="submit"
            >
              Next
            </button>
          </div>
        </form>
      </div>
    </>
  );
}
