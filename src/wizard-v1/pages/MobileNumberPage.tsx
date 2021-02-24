import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import locations from '../locations';
import { Button, ButtonSet, Form, TextInput } from 'carbon-components-react';
import PageContainer from '../../PageContainer';
import ProgressBar from '../../ProgressBar';

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

  return <PageContainer>
  <ProgressBar currentStep={2} />
  <h1>Mobile number</h1>
  <Form onSubmit={onSubmit}>
    <TextInput
      id="mobileNumber"
      value={mobileNumber}
      onChange={e => setMobileNumber(e.target.value)}
      type="number"
      labelText="Mobile number"
    />
    <ButtonSet>
      <Button kind="secondary" onClick={onBack} type="button">Back</Button>
      <Button kind="primary" type="submit">Submit</Button>
    </ButtonSet>
  </Form>
</PageContainer>
};

export default MobileNumberPage;