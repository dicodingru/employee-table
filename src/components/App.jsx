import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import FilterableTable from './FilterableTable';
import EditForm from './EditForm';
import NotFound from './NotFound.jsx';

const App = () => (
  <Router>
    <div className="container-fluid py-3">
      <Switch>
        <Route exact path="/" component={FilterableTable} />
        <Route
          exact
          path="/add"
          render={() => {
            return <EditForm action={'add'} />;
          }}
        />
        <Route
          exact
          path="/edit/:id"
          render={({ location }) => {
            const employeeId = location.pathname.replace('/edit/', '');
            return <EditForm action={'edit'} employeeId={Number(employeeId)} />;
          }}
        />
        <Route component={NotFound} />
      </Switch>
    </div>
  </Router>
);

export default App;
