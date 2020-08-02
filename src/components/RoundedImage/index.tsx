import React from 'react';

import {Image, NoImage, NoImageText, NoImageContent} from './styles';

type Props = {
  image?: string | null;
  scale?: number;
  name: string;
};

const RoundedImage: React.FC<Props> = ({image, scale = 1, name = ''}) => {
  const size = 80 * scale;
  const initials = name.split(' ').map((n, index) => index < 2 && n[0]);

  return (
    <>
      <NoImage size={size} scale={scale}>
        <NoImageText scale={scale}>{initials}</NoImageText>
      </NoImage>
      {!!image ? (
        <Image size={size} scale={scale} source={{uri: image}} />
      ) : (
        <NoImageContent size={size} scale={scale} />
      )}
    </>
  );
};

export default React.memo(RoundedImage);
