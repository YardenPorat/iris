import React from 'react';
import styled from 'styled-components';
import { storiesOf } from '@storybook/react';

import { ButtonFileUpload } from './ButtonFileUpload';
import { Story } from '../../../storybook';

const $ButtonFileUpload = styled(ButtonFileUpload)`
  margin: 0 1rem 1rem 0;
`;

const componentName = 'Button';

storiesOf(`components|buttons/`, module).add('file upload', () => (
  <Story title={componentName} subTitle="File Upload">
    <$ButtonFileUpload
      label="Upload"
      id="uploadButtonFileUpload1"
      data-foo="bar"
    />
    <$ButtonFileUpload
      label="Upload"
      id="uploadButtonFileUpload2"
      format="secondary"
    />
    <$ButtonFileUpload
      label="Upload"
      id="uploadButtonFileUploadDisabled"
      format="secondaryTextOnly"
      disabled
    />
  </Story>
));