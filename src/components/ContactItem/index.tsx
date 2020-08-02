import React, {useState} from 'react';
import {View} from 'react-native';
import Modal from 'react-native-modal';

import RoundedImage from '../RoundedImage';

import {
  Container,
  NameText,
  PhoneText,
  InfoContainer,
  ModalContainer,
  Close,
  NameTextModal,
  PhoneTextModal,
  DescribeTextModal,
  InputContainer,
  Input,
  Button,
  ValueText,
} from './styles';
import {Separator} from '../Separator';
import {IContact} from '../../models/contact';

const ContactItem: React.FC<{
  contact: IContact;
  withValue?: boolean;
  withSeparator?: boolean;
  disable?: boolean;
}> = ({contact, withValue = false, withSeparator = false, disable = false}) => {
  const [isModalVisible, setModalVisible] = useState(false);
  const {name, photo, phone} = contact;

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  return (
    <>
      {withSeparator && <Separator />}
      <Container onPress={disable ? null : toggleModal}>
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
      <Modal isVisible={isModalVisible}>
        <ModalContainer>
          <Close onPress={toggleModal} />
          <RoundedImage scale={0.9} image={contact.image} />
          <NameTextModal>Débora Pomposa</NameTextModal>
          <PhoneTextModal>(11)998654-78521</PhoneTextModal>
          <DescribeTextModal>Valor a enviar:</DescribeTextModal>
          <InputContainer>
            <Input value="R$ 0,00" />
          </InputContainer>
          <Button>Enviar</Button>
        </ModalContainer>
      </Modal>
    </>
  );
};

export default ContactItem;
