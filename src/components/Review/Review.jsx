import { useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';

export default function Review() {
  const reduxStore = useSelector((state) => state);
  const history = useHistory();

  //need to add Push Statement to add data to DB

  const handleSubmit = (event) => {
    event.preventDefault;
    console.log('Handle submit');

    dispatch({
      type: 'ELEMENT_LIST_ADD',
      payload: {
        name: inputName,
        region: inputRegion,
      },
    });

    history.push('/success');
  };

  return (
    <>
      <div className="form-spacing">
        <form onSubmit={handleSubmit}>
          <h1>Feedback Summary</h1>
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
          <button className="buttonComponent">Submit</button>
        </form>
      </div>
    </>
  );
}
