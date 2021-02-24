import { Redirect, Route, Switch, useHistory } from 'react-router-dom';
import { useEffect } from 'react';
import NamePage from '../steps/NamePage';
import SexPage from '../steps/SexPage';
import MobileNumberPage from '../steps/MobileNumberPage';
import wizardLocations from './locations';
import locations from '../locations';
import useOnboarindUserState from '../useOnboardingUserState';

const UserOnboardingV4Router = () => {
  const history = useHistory();
  const [user, setUser, resetState] = useOnboarindUserState();  

  useEffect(() => () => resetState(), [resetState]);

  const onNext = nextUrl => updatedUser => {
    const newUser = {...user, ...updatedUser };
    setUser(newUser);
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