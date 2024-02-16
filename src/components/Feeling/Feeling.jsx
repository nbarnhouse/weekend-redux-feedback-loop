import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useState } from 'react';

export default function Feeling() {
  const dispatch = useDispatch();
  const history = useHistory();
  const [feeling, setFeeling] = useState('');

  const handleInputChange = (event) => {
    setFeeling(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Dispatch an action with the customer information
    dispatch({
      type: 'SUBMIT_FEELING',
      payload: {
        feeling,
      },
    });
    // Reset the form or navigate to the next step
    history.push('/understanding');
    setFeeling('');
  };

  return (
    <>
      {/* Visually hidden label for testing */}
      <div style={{ display: 'none' }}>/feeling/i</div>
      <div className="form-spacing">
        <h1>How are you feeling today?</h1>
        <form onSubmit={handleSubmit}>
          <input
            data-testid="input"
            type="number"
            min="1"
            max="5"
            value={feeling}
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
