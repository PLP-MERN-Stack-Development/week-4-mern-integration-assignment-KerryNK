import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Layout from './components/Layout';
import Routes from './routes';
import { AppProvider } from './context/AppContext';

const App = () => {
  return (
    <AppProvider>
      <Router>
        <Layout>
          <Routes />
        </Layout>
      </Router>
    </AppProvider>
  );
};

export default App;