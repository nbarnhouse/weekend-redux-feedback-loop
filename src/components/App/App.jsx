import './App.css';
import { HashRouter as Router, Route } from 'react-router-dom';
import Feeling from '../Feeling/Feeling.jsx';
import Understanding from '../Understanding/Understanding.jsx';
import Support from '../Support/Support.jsx';
import Comments from '../Comments/Comments.jsx';
import Header from '../Header/Header.jsx';
import Review from '../Review/Review.jsx';
import Success from '../Success/Success.jsx';

function App() {
  //create reducer and store
  //One for each page

  return (
    <>
      <div className="form-container">
        <Header />

        <Router>
          <Route path="/" exact>
            <Feeling />
          </Route>
          <Route path="/understanding">
            <Understanding />
          </Route>
          <Route path="/support">
            <Support />
          </Route>
          <Route path="/comments">
            <Comments />
          </Route>
          <Route path="/review">
            <Review />
          </Route>
          <Route path="/success">
            <Success />
          </Route>
        </Router>
      </div>
    </>
  );
}

export default App;
