import React from 'react';

import {
  Image,
  GradiendBorder,
  SeparatorBorder,
  SeparatorBorderContainer,
  NoImage,
} from './styles';

const ProfileImage: React.FC = () => {
  return (
    <GradiendBorder>
      <SeparatorBorderContainer>
        <SeparatorBorder />
      </SeparatorBorderContainer>
      <NoImage />
      <Image />
    </GradiendBorder>
  );
};

export default ProfileImage;
