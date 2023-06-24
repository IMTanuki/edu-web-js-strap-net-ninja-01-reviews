// import - modules
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

// import - react hooks

// import - custom hooks

// import - components
import SiteHeader from './components/Header/SiteHeader';
import Home from './pages/Home/Home';
import ReviewDetails from './pages/ReviewDetails/ReviewDetails';
import Category from './pages/Category/Category';

// function
function App () {
  return (
      <Router>
        <div className="App">
          <SiteHeader/>
          <div className="">
            <Routes>
              <Route path='/' element={ <Home/> }></Route>
              <Route path="/review-details/:id" element={ <ReviewDetails/> }></Route>
              <Route path="/category/:id" element={ <Category/> }></Route>
            </Routes>
          </div>
        </div>
      </Router>
  );
}
export default App;
