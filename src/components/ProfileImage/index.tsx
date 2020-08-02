import React from 'react';

import {
  Image,
  GradiendBorder,
  SeparatorBorder,
  SeparatorBorderContainer,
  NoImage,
} from './styles';

type Props = {
  photo: string;
};

const ProfileImage: React.FC<Props> = ({photo}) => {
  return (
    <GradiendBorder>
      <SeparatorBorderContainer>
        <SeparatorBorder />
      </SeparatorBorderContainer>
      <NoImage />
      <Image source={{uri: photo}} />
    </GradiendBorder>
  );
};

export default ProfileImage;
