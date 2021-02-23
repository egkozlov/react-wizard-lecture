import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from 'react-router-dom';
import SelectFlowPage from './SelectFlowPage';
import SuccessPage from './SuccessPage';
import UserOnboardingV1Router from './wizard-v1/UserOnboardingNavigationInPagesRouter';
import UserOnboardingV2Router from './wizard-v2/UserOnboaringV2Router';
import UserOnboardingV3Router from './wizard-v3/UserOnboaringV3Router';
import UserOnboardingSingleRoute from './wizard-v0/UserOnboardingSingleRoute';
import locations from './locations';
import UserOnboardingV4Router from './wizard-v4/UserOnboaringV4Router';

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

        <Route path={locations.v2.base}>
          <UserOnboardingV2Router />
        </Route>

        <Route path={locations.v3.base}>
          <UserOnboardingV3Router />
        </Route>

        <Route path={locations.v4.base}>
          <UserOnboardingV4Router />
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
