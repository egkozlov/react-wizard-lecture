import { Redirect, Route, Switch, useHistory, useLocation } from 'react-router-dom';
import NamePage from '../steps/NamePage';
import SexPage from '../steps/SexPage';
import MobileNumberPage from '../steps/MobileNumberPage';
import wizardLocations from './locations';
import locations from '../locations';

const defaultUser = {
  firstName: '',
  lastName: '',
  sex: null,
  mobileNumber: ''
};

const UserOnboardingV2Router = () => {
  const history = useHistory();
  const { state } = useLocation<{ user: any }>();
  const location = useLocation();
  const user = state?.user || defaultUser;

  const onNext = nextUrl => updatedUser => {
    const newState = {
      user: { ...user, ...updatedUser },
    };

    // To update the state on the current page
    history.replace(location.pathname, newState);

    // To go to new page with the current page
    history.push(nextUrl, newState);
  };

  const onFinishFlow = updatedUser => {
    history.push(locations.success, { user: { ...user, ...updatedUser } });
  }

  const onBack = () => history.goBack();

  return (
    <Switch>
      <Route path={wizardLocations.name} exact>
        <NamePage
          user={user}
          onNext={onNext(wizardLocations.sex)}
        />
      </Route>
      <Route path={wizardLocations.sex} exact>
        <SexPage
          user={user}
          onNext={onNext(wizardLocations.mobileNumber)}
          onBack={onBack}
        />
      </Route>
      <Route path={wizardLocations.mobileNumber} exact>
        <MobileNumberPage
          user={user}
          onNext={onFinishFlow}
          onBack={onBack}
        />
      </Route>
      <Redirect to={wizardLocations.name} />
    </Switch>
  );
};

export default UserOnboardingV2Router;