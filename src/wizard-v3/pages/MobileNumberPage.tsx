import { useState } from 'react';

const MobileNumberPage = ({
  user,
  onBack,
  onNext,
}) => {
  const [mobileNumber, setMobileNumber] = useState(user.mobileNumber);

  const onSubmit = () => {
    onNext({ mobileNumber });
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