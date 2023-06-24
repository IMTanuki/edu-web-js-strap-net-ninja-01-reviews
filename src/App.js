// import - modules
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

// import - react hooks

// import - custom hooks

// import - components
import SiteHeader from './components/Header/SiteHeader';
import Home from './pages/Home/Home';
import ReviewDetails from './pages/ReviewDetails/ReviewDetails';
import Categories from './pages/Categories/Categories';

// function
function App () {
  return (
      <Router>
        <div className="App">
          <SiteHeader/>
          <div className="">
            <Routes>
              <Route exact path='/' element={ <Home/> }></Route>
              <Route path="/review-details/:id" element={ <ReviewDetails/> }></Route>
              <Route path="/categories/:id" element={ <Categories/> }></Route>
            </Routes>
          </div>
        </div>
      </Router>
  );
}
export default App;
