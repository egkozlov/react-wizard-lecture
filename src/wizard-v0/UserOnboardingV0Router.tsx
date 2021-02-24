import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import NamePage from '../steps/NamePage';
import SexPage from '../steps/SexPage';
import MobileNumberPage from '../steps/MobileNumberPage';
import locations from '../locations';

const UserOnboardingV0Router = () => {
  const [page, setPage] = useState(0);
  const [user, setUser] = useState({
    firstName: '',
    lastName: '',
    sex: null,
    mobileNumber: '',
  });
  const history = useHistory();

  const onNext = (resUser) => {
    setPage(page => page + 1);
    setUser(user => ({ ...user, ...resUser }));
  };

  const onBack = () => {
    setPage(page => page - 1);
  };

  const onFinishFlow = (resUser) => {
    history.push(locations.success, { user: {...user, ...resUser} });
  }

  switch (page) {
    case 0:
      return <NamePage user={user} onNext={onNext} />;
    case 1:
      return <SexPage user={user} onBack={onBack} onNext={onNext} />;
    case 2:
      return <MobileNumberPage user={user} onBack={onBack} onNext={onFinishFlow} />;
    default:
      return null;
  }
};

export default UserOnboardingV0Router;