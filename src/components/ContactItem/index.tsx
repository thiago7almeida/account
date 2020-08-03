import React, {useCallback} from 'react';
import {View} from 'react-native';
import {useDispatch} from 'react-redux';

import RoundedImage from '../RoundedImage';

import {
  Container,
  NameText,
  PhoneText,
  InfoContainer,
  ValueText,
} from './styles';
import {Separator} from '../Separator';

import {IContact} from '../../models/contact';
import {setContact} from '../../store/ducks/contacts';
import {ITransfer} from '../../models/transfer';

type Props = {
  contact?: IContact;
  transfer?: ITransfer;
  withValue?: boolean;
  withSeparator?: boolean;
  disable?: boolean;
};

const ContactItem: React.FC<Props> = ({
  contact,
  withValue = false,
  withSeparator = false,
  disable = false,
  transfer,
}) => {
  const dispatch = useDispatch();

  const storeContact = useCallback(
    () => contact && dispatch(setContact(contact)),
    [dispatch, contact],
  );
  const pressContact = () => !disable && storeContact();

  const {name, photo, phone} = contact ?? transfer?.contact ?? {};
  const {Valor} = transfer ?? {};

  return (
    <>
      {withSeparator && <Separator />}
      <Container onPress={pressContact}>
        <>
          <RoundedImage image={photo} name={name} />
          <InfoContainer>
            <View>
              <NameText>{name}</NameText>
              <PhoneText>{phone}</PhoneText>
              {withValue && <ValueText>{Valor}</ValueText>}
            </View>
          </InfoContainer>
        </>
      </Container>
    </>
  );
};

export default ContactItem;
