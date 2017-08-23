import React from 'react';
import { ToggleButtonGroup, ToggleButton } from 'TomisApp/ToggleButton';

const ToggleButtonLocalZulu = props =>
  <ToggleButtonGroup {...props}>
    <ToggleButton label="Local" value="LOCAL" />
    <ToggleButton label="Zulu" value="ZULU" />
  </ToggleButtonGroup>;

export default ToggleButtonLocalZulu;
