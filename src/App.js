// import - modules
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import {ApolloClient, InMemoryCache, ApolloProvider} from "@apollo/client";

// import - react hooks

// import - custom hooks

// import - components
import SiteHeader from './components/Header/SiteHeader';
import Home from './pages/Home/Home';
import ReviewDetails from './pages/ReviewDetails/ReviewDetails';
import Categories from './pages/Categories/Categories';


// setup apollo client
const client = new ApolloClient({
    uri: 'http://localhost:5000/graphql',
    cache: new InMemoryCache()
});


// function
function App () {
  return (
      <Router>
          <ApolloProvider client = {client}>
              <div className="App">
                  <SiteHeader/>
                  <div className="">
                      <Routes>
                          <Route exact path='/' element={ <Home/> }></Route>
                          <Route path="/review-details/:id" element={ <ReviewDetails/> }></Route>
                          <Route path="/category/:id" element={ <Categories/> }></Route>
                      </Routes>
                  </div>
              </div>
          </ApolloProvider>

      </Router>
  );
}
export default App;
