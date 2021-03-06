import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import locations from '../locations';
import { Button, ButtonSet, Form, TextInput } from 'carbon-components-react';
import PageContainer from '../../PageContainer';
import ProgressBar from '../../ProgressBar';

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

  return <PageContainer>
    <ProgressBar currentStep={0} />
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