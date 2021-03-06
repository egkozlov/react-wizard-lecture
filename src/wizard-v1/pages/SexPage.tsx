import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Button, ButtonSet, Form, RadioButtonGroup, RadioButton, FormGroup } from 'carbon-components-react';
import locations from '../locations';
import PageContainer from '../../PageContainer';
import ProgressBar from '../../ProgressBar';

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

  return <PageContainer>
    <ProgressBar currentStep={1} />
    <h1>Sex</h1>
    <Form onSubmit={onSubmit}>
      <FormGroup legendText="Select sex">
        <RadioButtonGroup
          name="sex"
          defaultSelected={sex}
          onChange={setSex}
        >
          <RadioButton value="male" id="male" labelText="Male" />
          <RadioButton value="female" id="female" labelText="Female" />
        </RadioButtonGroup>
      </FormGroup>
      <ButtonSet>
        <Button kind="secondary" onClick={onBack} type="button">Back</Button>
        <Button kind="primary" type="submit">Submit</Button>
      </ButtonSet>
    </Form>
  </PageContainer>
};

export default SexPage;