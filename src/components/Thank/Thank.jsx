import { useHistory } from 'react-router-dom';

export default function Thank() {
  const history = useHistory();

  return (
    <>
      <h2 style={{ textAlign: 'center', padding: '50px 0px 50px 0px' }}>
        Thank you for your feedback!
      </h2>
      <div>
        <button
          data-testid="next"
          className="buttonComponent"
          onClick={() => {
            history.push('/feeling');
          }}
        >
          Next
        </button>
      </div>
    </>
  );
}
