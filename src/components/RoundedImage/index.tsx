import React from 'react';

import {Image, NoImage, NoImageText} from './styles';

type Props = {
  image?: string;
  scale?: number;
  initials: string;
};

const RoundedImage: React.FC<Props> = ({image, scale = 1, initials = 'AA'}) => {
  const size = 80 * scale;

  if (image) return <Image size={size} scale={scale} source={{uri: image}} />;

  return (
    <NoImage size={size} scale={scale}>
      <NoImageText scale={scale}>{initials}</NoImageText>
    </NoImage>
  );
};

export default React.memo(RoundedImage);
