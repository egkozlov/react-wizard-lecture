import { Redirect, Route, Switch, useHistory } from 'react-router-dom';
import { useEffect, useState } from 'react';
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

const setOnboardingState = newState => {
  sessionStorage.setItem('userOnboarding', JSON.stringify(newState));
};

const getOnboardingState = () => {
  let state;
  try {
    state = JSON.parse(sessionStorage.getItem('userOnboarding'));
  } catch (e) {

  }

  return state || { user: defaultUser };
};

const clearOnboardingState = () => {
  sessionStorage.removeItem('userOnboarding');
};

const UserOnboardingV4Router = () => {
  const history = useHistory();
  const [user, setUser] = useState(getOnboardingState().user);

  useEffect(() => () => clearOnboardingState(), []);

  const onNext = nextUrl => updatedUser => {
    const newState = {
      user: { ...user, ...updatedUser },
    };

    setOnboardingState(newState);
    setUser(newState.user);
    history.push(nextUrl);
  };

  const onBack = () => history.goBack();
  const onFinishFlow = updatedUser => {
    history.push(locations.success, { user: { ...user, ...updatedUser } });
  };

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

export default UserOnboardingV4Router;