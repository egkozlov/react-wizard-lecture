import { Button, ButtonSet, Form, TextInput } from 'carbon-components-react';
import { useState } from 'react';
import PageContainer from '../PageContainer';
import ProgressBar from '../ProgressBar';

const MobileNumberPage = ({
  user,
  onBack,
  onNext,
}) => {
  const [mobileNumber, setMobileNumber] = useState(user.mobileNumber);

  const onSubmit = () => {
    onNext({ mobileNumber });
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