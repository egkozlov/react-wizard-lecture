import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import locations from '../locations';

const SexPage = ({
  onNext,
  user,
}) => {
  const history = useHistory();
  const [sex, setSex] = useState(user.sex);
  const onSubmit = () => {
    onNext({ sex });
    history.push(locations.mobileNumber);
  };

  const onBack = () => {
    history.push(locations.name);
  };

  const onSetValue = (event) => {
    setSex(event.target.value);
  };

  return <>
    <h1>Sex</h1>
    <button onClick={onBack}>Back</button>
    <form onSubmit={onSubmit}>
      <div>
        <label>
          <input
            type="radio"
            value="male"
            checked={sex === 'male'}
            onChange={onSetValue}
          />
          Male
        </label>
      </div>
      <div>
        <label>
          <input
            type="radio"
            value="female"
            checked={sex === 'female'}
            onChange={onSetValue}
          />
          Female
        </label>
      </div>
      <button type="submit">Submit</button>
    </form>
  </>
};

export default SexPage;