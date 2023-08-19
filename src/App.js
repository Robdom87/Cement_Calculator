// import logo from './logo.svg';
import './App.css';
import {
  CementNav,
  Estimate,
  RequestMeasurements
 } from './ui-components';
 import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import Home from './pages/Home';
import Navbar from './components/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';

const httpLink = createHttpLink({
  uri: '/graphql',
});

const authLink = setContext((_, { headers }) => {
  // get the authentication token from local storage if it exists
  const token = localStorage.getItem('id_token');
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

const client = new ApolloClient({
  // Set up our client to execute the `authLink` middleware prior to making the request to our GraphQL API
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});



function App() {
  const handleFormSubmit = async (event) => {
    event.preventDefault();
    return;
    // $('#searchInput').val('');
  }

  return (
    <ApolloProvider client={client}>
    <Router>
    <CementNav/>      
    <Routes>
        <Route
          path="/"
          element={<RequestMeasurements 
            onSubmit={handleFormSubmit}
          />}
        />
        {/* <Route
          path='/estimate'
          element={<Estimate />}
        /> */}
      </Routes>
    </Router>
  </ApolloProvider>
  );
}

export default App;
