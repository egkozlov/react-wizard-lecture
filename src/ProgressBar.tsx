import { ProgressIndicator, ProgressStep } from "carbon-components-react";

const ProgressBar = ({ currentStep }) => (
  <ProgressIndicator currentIndex={currentStep}>
    <ProgressStep label="" />
    <ProgressStep label="" />
    <ProgressStep label="" />
  </ProgressIndicator>
);

export default ProgressBar;