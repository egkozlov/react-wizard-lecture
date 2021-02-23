import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import locations from '../locations';

const MobileNumberPage = ({
  user,
}) => {
  const history = useHistory();
  const [mobileNumber, setMobileNumber] = useState(user.mobileNumber);

  const onSubmit = () => {
    history.push('/success', { user: { ...user, mobileNumber } });
  };

  const onBack = () => {
    history.push(locations.sex);
  };

  return <>
    <h1>Mobile number</h1>
    <button onClick={onBack}>Back</button>
    <form onSubmit={onSubmit}>
      <div>
        <label>
          Mobile number
         <input
            value={mobileNumber}
            onChange={e => setMobileNumber(e.target.value)}
            type="text"
          />
        </label>
      </div>
      <button type="submit">Submit</button>
    </form>
  </>
};

export default MobileNumberPage;