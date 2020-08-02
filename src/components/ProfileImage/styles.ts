import styled from 'styled-components/native';
import LinearGradient from 'react-native-linear-gradient';

import {colors} from '../../constants';

const gradientConfig = {start: {x: 0, y: 0}, end: {x: 1, y: 1}};

export const Image = styled.Image.attrs({
  source: {
    uri:
      'https://lh3.googleusercontent.com/-Adc2QRz1Wqw/XR65vvOzoMI/AAAAAAAAHHE/aPqlq9qnwQotWa56ZLQVGeufO8-uyJlqACEwYBhgLKtQDAL1OcqyoUC95wTJwF6gOQFPXKarL2QnHz2ozzurrfRM7LB_55JvOmV02VTGsKwxYxngSgTM5ZrkgrOgMDZPIkB5ZGdrCPxY5sTX43_PrCVpLwRuG1HhJEzQOhba2Tv9FonBpHtq4xWPiqFO9cpSLMZVKlNYMzSIDqYNDtKdN0waUW4K13-qIWTOxplloUmkp8Y0T5IVfIb0M8uMYO_yOQ5LFIErgq2qpj5duyEENYPLy_7CdmNjCgMx30yl4Z2JNuDnKJw1kgpTzev_4XIv1FhvICfGfa559yJqHyJj8_0GI4heSSzzFIHRxJtsViS4JFq49Z0hsIGxowmCcpjt30sXoTWZx9XmGilkrpWpwgEudng80jL5fwAbEUf0wT0NqnMmf5_X3w52McUhdVWw0Erbo3U7k6Ke7VgZBMGYtKMDo6kDPh_v9pUOgjpZMt0aZh9re7d9CVuvr11tVH_hgussjyiFyPL9XMS2L1QEq1vJHaVtoRAytX719fxweb7SUS7eZKtjcn1k56qN2F8jxMarKD7KMyvNNc09kmk9PU1KCWIjDs_7MP95WNkY2kphRzvrIkcOeK2veuvpkBZg9wzDQkahn94VgT4lkHqYDkTFqXGVsMPKLl_kF/w140-h140-p/T49HBCXJA-UA1NX9M24-947728df63f4-512.jpg',
  },
})`
  width: 140px;
  height: 140px;
  border-radius: 70px;
`;
export const NoImage = styled.View`
  width: 140px;
  height: 140px;
  border-radius: 70px;
  background-color: ${colors.backgroundTertiary};
  position: absolute;
`;

export const GradiendBorder = styled(LinearGradient).attrs({
  colors: [colors.transparent, colors.border],
  ...gradientConfig,
})`
  width: 150px;
  height: 150px;
  justify-content: center;
  align-items: center;
  border-radius: 100px;
`;

export const SeparatorBorder = styled(LinearGradient).attrs({
  colors: [colors.border, colors.borderSecondary],
  ...gradientConfig,
})`
  height: 75px;
  border-top-right-radius: 75px;
`;

export const SeparatorBorderContainer = styled.View`
  height: 150px;
  width: 75px;
  position: absolute;
  align-self: flex-end;
`;
