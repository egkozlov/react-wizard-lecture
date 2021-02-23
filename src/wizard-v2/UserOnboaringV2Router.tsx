import { useState } from 'react';
import { Redirect, Route, Switch, useHistory } from 'react-router-dom';
import NamePage from './pages/NamePage';
import SexPage from './pages/SexPage';
import MobileNumberPage from './pages/MobileNumberPage';
import wizardLocations from './locations';
import locations from './../locations';

const UserOnboardingV2Router = () => {
  const history = useHistory();
  const [user, setUser] = useState({
    firstName: '',
    lastName: '',
    sex: null,
    mobileNumber: ''
  });

  const onNext = nextUrl => updatedUser => {
    setUser(user => ({ ...user, ...updatedUser }));
    history.push(nextUrl);
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