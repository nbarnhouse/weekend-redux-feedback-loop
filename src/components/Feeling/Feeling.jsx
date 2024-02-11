import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useState } from 'react';
import NextButton from '../NextButton/NextButton.jsx';

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
    <div className="form-spacing">
      <h1>How are you feeling today?</h1>
      <form onSubmit={handleSubmit}>
        <input
          data-testid="input"
          required
          type="number"
          min="1"
          max="5"
          value={feeling}
          onChange={handleInputChange}
        ></input>
        <NextButton />
      </form>
    </div>
  );
}
