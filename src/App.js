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
    uri: 'https://api-us-east-1-shared-usea1-02.hygraph.com/v2/cljby5owj2v1e01t202leb6ao/master',
    headers: {
        Authorization: 'Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6ImdjbXMtbWFpbi1wcm9kdWN0aW9uIn0.eyJ2ZXJzaW9uIjozLCJpYXQiOjE2ODc3NTM0OTYsImF1ZCI6WyJodHRwczovL2FwaS11cy1lYXN0LTEtc2hhcmVkLXVzZWExLTAyLmh5Z3JhcGguY29tL3YyL2NsamJ5NW93ajJ2MWUwMXQyMDJsZWI2YW8vbWFzdGVyIiwibWFuYWdlbWVudC1uZXh0LmdyYXBoY21zLmNvbSJdLCJpc3MiOiJodHRwczovL21hbmFnZW1lbnQuZ3JhcGhjbXMuY29tLyIsInN1YiI6IjEyNDIyZDg4LWQzN2EtNGZlMy04ZmYxLTZjNWY1NWM0YzliOCIsImp0aSI6ImNsamNjdXNqZjMxeGEwMXVlNzd1eDFna2QifQ.VxfkRxiCjPcxC_NNcX7MS7gXZtNeuHC4ghhIpzyNZk4zQwa4ZTfbuZKhP6EJTOGEM1okuIzr5J8VkGZMx0oc6FHE-DYPA7lL3DSGaMOKa7E133wBIDR6wIpRS_cCg63wTQdoDv04xAKYA51dxzhLK8mYXPQp-J4OSbpsA5BJJerZVPTmtoShA8Ark7B0hXUYhBM1z-hP37FFuJfMo4YaHd1aeuGxXNHxSGSS0FtHuICkuK7aohtau-MJagpCBcUw27CjY64b4nBqkGJl87Xm3D05fLBNd0NlkfhaOxahNqBSV-EX0PJrVIjEjxekP0xorAnfPXsRaG4agqTQ4sYUV8uzWrS6mGO2UgrQU-1qrGqYcj5HB8V8eypDEGqhqNxWRHAAlTl8SL1UeX2OctySPt1mV4k1bUfxo0jZci2zkLpcXJnOEyxmn6tSQ_rDXt6Uw_0Ee0omaCoCx0qkCBpyAS5yv04fLguDuIEHlg9AZiaboIVxIqrkkGUkIvE4dLElRRt7DKJDUf6UycBvKFe4u-gUUgvKSeSQmPIF4_LIDXZRpR4xMPBIP3QxQJYMcM-sdsFQvHefBheX_0H2jFDctx8Oca2FTrdXrKsQ8PZQSM24CTrfYb-S60-8xyW73MHKJmZVm_R8OhT1HcQVJs_syZ17M2maHqdl9Z-JQYJCJyo',
    },
    cache: new InMemoryCache(),
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
