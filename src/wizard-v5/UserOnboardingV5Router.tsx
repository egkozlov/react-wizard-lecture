import { useHistory, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import NamePage from '../steps/NamePage';
import SexPage from '../steps/SexPage';
import MobileNumberPage from '../steps/MobileNumberPage';
import locations from '../locations';
import useOnboarindUserState from '../useOnboardingUserState';

enum PAGES {
  NAME = 'name',
  SEX = 'sex',
  MOBILE_NUMBER = 'mobile-number',
}

const UserOnboardingV5Router = () => {
  const history = useHistory();
  const locationState = useLocation<{ currentPage: PAGES }>().state;
  const currentPage = locationState?.currentPage || PAGES.NAME;
  const [user, setUser, resetState] = useOnboarindUserState();

  useEffect(() => () => resetState(), [resetState]);

  const onNext = nextPage => updatedUser => {
    const newUser = { ...user, ...updatedUser };
    setUser(newUser);
    history.push(locations.v5.base, { currentPage: nextPage });
  };

  const onBack = () => history.goBack();
  const onFinishFlow = updatedUser => {
    history.push(locations.success, { user: { ...user, ...updatedUser } });
  };

  switch (currentPage) {
    case PAGES.NAME:
      return (<NamePage
        user={user}
        onNext={onNext(PAGES.SEX)}
      />);
    case PAGES.SEX:
      return (<SexPage
        user={user}
        onNext={onNext(PAGES.MOBILE_NUMBER)}
        onBack={onBack}
      />);
    case PAGES.MOBILE_NUMBER:
      return (<MobileNumberPage user={user}
        onNext={onFinishFlow}
        onBack={onBack} />);
    default:
      return null;
  }
};

export default UserOnboardingV5Router;