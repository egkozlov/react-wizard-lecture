import { useState } from 'react';

const defaultUser = {
  firstName: '',
  lastName: '',
  sex: null,
  mobileNumber: ''
};

const getOnboardingState = () => {
  let user;
  try {
    user = JSON.parse(sessionStorage.getItem('userOnboarding'));
  } catch (e) {

  }

  return user || defaultUser;
};

const setOnboardingState = user => {
  sessionStorage.setItem('userOnboarding', JSON.stringify(user));
};

const clearOnboardingState = () => {
  sessionStorage.removeItem('userOnboarding');
};

const useOnboarindUserState = () => {
  const [user, setUser] = useState(getOnboardingState());
  const setUserState = newUser => {
    setOnboardingState(newUser);
    setUser(newUser);
  };

  return [user, setUserState, clearOnboardingState];
}

export default useOnboarindUserState;