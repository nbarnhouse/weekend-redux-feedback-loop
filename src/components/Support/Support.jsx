import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useState } from 'react';

export default function Support() {
  const dispatch = useDispatch();
  const history = useHistory();
  const [support, setSupport] = useState('');

  const handleInputChange = (event) => {
    setSupport(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Dispatch an action with the customer information
    dispatch({
      type: 'SUBMIT_SUPPORT',
      payload: {
        support,
      },
    });
    // Reset the form or navigate to the next step
    history.push('/comments');
    setSupport('');
  };

  return (
    <div className="form-spacing">
      <h1>How well are you being supported?</h1>
      <form onSubmit={handleSubmit}>
        <input
          data-testid="input"
          type="number"
          min="1"
          max="5"
          value={support}
          onChange={handleInputChange}
        ></input>
        <button className="buttonComponent" type="submit" data-testid="next">
          Next
        </button>
      </form>
    </div>
  );
}
