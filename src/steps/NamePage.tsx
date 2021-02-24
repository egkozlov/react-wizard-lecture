import { Button, ButtonSet, Form, TextInput } from 'carbon-components-react';
import { useState } from 'react';
import PageContainer from '../PageContainer';
import ProgressBar from '../ProgressBar';

const NamePage = ({
  onNext,
  user,
}) => {
  const [firstName, setFirstName] = useState(user.firstName);
  const [lastName, setLastName] = useState(user.lastName);
  const onSubmit = () => {
    onNext({
      firstName,
      lastName
    });
  };

  return <PageContainer>
    <ProgressBar currentStep={0}/>
    <h1>Name info</h1>
    <Form onSubmit={onSubmit}>
      <TextInput
        id="firstName"
        value={firstName}
        onChange={e => setFirstName(e.target.value)}
        type="text"
        labelText="First name"
      />
      <TextInput
        id="lastName"
        value={lastName}
        onChange={e => setLastName(e.target.value)}
        type="text"
        labelText="Last name"
      />

      <ButtonSet>
        <Button kind="primary" type="submit">Submit</Button>
      </ButtonSet>
    </Form>
  </PageContainer>
};

export default NamePage;