import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from 'react-router-dom';
import SelectFlowPage from './SelectFlowPage';
import SuccessPage from './SuccessPage';
import UserOnboardingV1Router from './wizard-v1/UserOnboardingNavigationInPagesRouter';
import UserOnboardingSingleRoute from './wizard-v0/UserOnboardingSingleRoute';
import locations from './locations';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact>
          <SelectFlowPage />
        </Route>

        <Route path={locations.v0.base}>
          <UserOnboardingSingleRoute />
        </Route>

        <Route path={locations.v1.base}>
          <UserOnboardingV1Router />
        </Route>

        <Route path={locations.success} exact>
          <SuccessPage />
        </Route>

        <Redirect to="/" />
      </Switch>
    </Router>
  );
}

export default App;
