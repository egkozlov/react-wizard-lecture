import { useState } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import NamePage from './pages/NamePage';
import SexPage from './pages/SexPage';
import MobileNumberPage from './pages/MobileNumberPage';
import locations from './locations';

const UserOnboardingV1Router = () => {
  const [user, setUser] = useState({
    firstName: '',
    lastName: '',
    sex: null,
    mobileNumber: ''
  });

  const onNext = (resUser) => {
    setUser(user => ({ ...user, ...resUser }));
  };

  return (
    <Switch>
      <Route path={locations.name} exact>
        <NamePage user={user} onNext={onNext} />
      </Route>
      <Route path={locations.sex} exact>
        <SexPage user={user} onNext={onNext} />
      </Route>
      <Route path={locations.mobileNumber} exact>
        <MobileNumberPage user={user} />
      </Route>
      <Redirect to={locations.name} />
    </Switch>
  );
};

export default UserOnboardingV1Router;