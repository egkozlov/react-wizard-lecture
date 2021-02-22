import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from 'react-router-dom';
import SelectFlowPage from './SelectFlowPage';
import SuccessPage from './SuccessPage';
import UserOnboardingSingleRoute from './wizard-single-route/UserOnboardingSingleRoute';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact>
          <SelectFlowPage />
        </Route>

        <Route path="/wizard-single-route" exact>
          <UserOnboardingSingleRoute />
        </Route>

        <Route path="/success" exact>
          <SuccessPage />
        </Route>

        <Redirect to="/" />
      </Switch>
    </Router>
  );
}

export default App;
