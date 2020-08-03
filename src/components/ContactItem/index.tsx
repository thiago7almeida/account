import React, {useCallback} from 'react';
import {View} from 'react-native';
import {useDispatch} from 'react-redux';

import RoundedImage from '../RoundedImage';

import {Container, NameText, PhoneText, InfoContainer} from './styles';
import {Separator} from '../Separator';

import {IContact} from '../../models/contact';
import {setContact} from '../../store/ducks/contacts';

type Props = {
  contact: IContact;
  withValue?: boolean;
  withSeparator?: boolean;
  disable?: boolean;
};

const ContactItem: React.FC<Props> = ({
  contact,
  withValue = false,
  withSeparator = false,
  disable = false,
}) => {
  const dispatch = useDispatch();

  const storeContact = useCallback(() => dispatch(setContact(contact)), [
    dispatch,
  ]);
  const pressContact = () => !disable && storeContact();

  const {name, photo, phone} = contact;

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
              {/* {withValue && <ValueText>{contact.value}</ValueText>} */}
            </View>
          </InfoContainer>
        </>
      </Container>
    </>
  );
};

export default ContactItem;
