import { useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';
import axios from 'axios';

export default function Review() {
  const reduxStore = useSelector((state) => state);
  const history = useHistory();

  //need to add Push Statement to add data to DB

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Handle submit');

    axios({
      method: 'POST',
      url: '/api/feedback',
      data: {
        feeling: reduxStore.customerFeeling.feeling,
        understanding: reduxStore.customerUnderstanding.understanding,
        support: reduxStore.customerSupport.support,
        comments: reduxStore.customerComments.comments,
      },
    })
      .then((response) => {})
      .catch((error) => {
        console.log('error with element get request', error);
      });

    history.push('/thank');
  };

  return (
    <>
      {/* Visually hidden label for testing */}
      <div style={{ display: 'none' }}>/review/i</div>
      <div className="form-spacing">
        <form onSubmit={handleSubmit}>
          <h1>Feedback Review Summary</h1>
          <div>
            <h2>Feeling: {reduxStore.customerFeeling.feeling}</h2>
          </div>
          <div>
            <h2>
              Understanding: {reduxStore.customerUnderstanding.understanding}
            </h2>
          </div>
          <div>
            <h2>Support: {reduxStore.customerSupport.support}</h2>
          </div>
          <div>
            <h2>Comments: {reduxStore.customerComments.comments}</h2>
          </div>
          <button data-testid="next" className="buttonComponent">
            Submit
          </button>
        </form>
      </div>
    </>
  );
}
