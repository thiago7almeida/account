import React from 'react';

import {
  Image,
  GradiendBorder,
  SeparatorBorder,
  SeparatorBorderContainer,
} from './styles';

const ProfileImage: React.FC = () => {
  return (
    <GradiendBorder>
      <SeparatorBorderContainer>
        <SeparatorBorder />
      </SeparatorBorderContainer>
      <Image />
    </GradiendBorder>
  );
};

export default ProfileImage;
