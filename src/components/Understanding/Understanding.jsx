import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useState } from 'react';

export default function Understanding() {
  const dispatch = useDispatch();
  const history = useHistory();
  const [understanding, setUnderstanding] = useState('');

  const handleInputChange = (event) => {
    setUnderstanding(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Dispatch an action with the customer information

    dispatch({
      type: 'SUBMIT_UNDERSTANDING',
      payload: {
        understanding,
      },
    });
    // Reset the form or navigate to the next step
    history.push('/support');
    setUnderstanding('');
  };

  return (
    <>
      {/* Visually hidden label for testing */}
      <div style={{ display: 'none' }}>/understanding/i</div>
      <div className="form-spacing">
        <h1>How well are you understanding the content?</h1>
        <form onSubmit={handleSubmit}>
          <input
            data-testid="input"
            type="number"
            min="1"
            max="5"
            value={understanding}
            onChange={handleInputChange}
          ></input>
          <button data-testid="next" className="buttonComponent" type="submit">
            Next
          </button>
        </form>
      </div>
    </>
  );
}
