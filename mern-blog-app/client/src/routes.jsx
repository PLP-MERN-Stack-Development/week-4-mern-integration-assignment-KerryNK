import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import PostList from './components/PostList';
import PostView from './components/PostView';
import PostForm from './components/PostForm';
import Navigation from './components/Navigation';
import Layout from './components/Layout';

const Routes = () => {
  return (
    <Router>
      <Layout>
        <Navigation />
        <Switch>
          <Route path="/" exact component={PostList} />
          <Route path="/posts/:id" component={PostView} />
          <Route path="/create" component={PostForm} />
          <Route path="/edit/:id" component={PostForm} />
        </Switch>
      </Layout>
    </Router>
  );
};

export default Routes;