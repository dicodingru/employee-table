import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import FilterableEmployeeTable from './FilterableEmployeeTable';
import EmployeeEditForm from './EmployeeEditForm';
import NotFound from './NotFound.jsx';

const App = () => (
  <Router>
    <div className="container-fluid py-3">
      <Switch>
        <Route exact path="/" component={FilterableEmployeeTable} />
        <Route
          exact
          path="/edit/:id"
          render={({ location }) => {
            const employeeId = location.pathname.replace('/edit/', '');
            return <EmployeeEditForm employeeId={employeeId} />;
          }}
        />
        <Route component={NotFound} />
      </Switch>
    </div>
  </Router>
);

export default App;
