import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import locations from '../locations';

const NamePage = ({
  onNext,
  user,
}) => {
  const history = useHistory();
  const [firstName, setFirstName] = useState(user.firstName);
  const [lastName, setLastName] = useState(user.lastName);
  const onSubmit = () => {
    onNext({
      firstName,
      lastName
    });

    history.push(locations.sex);
  };

  return <>
    <h1>User name</h1>
    <form onSubmit={onSubmit}>
      <div>
        <label>
          First name
        <input
            value={firstName}
            onChange={e => setFirstName(e.target.value)}
            type="text"
          />
        </label>
      </div>

      <div>
        <label>
          Last name
        <input
            value={lastName}
            onChange={e => setLastName(e.target.value)}
            type="text"
          />
        </label>
      </div>

      <button type="submit">Submit</button>
    </form>
  </>
};

export default NamePage;