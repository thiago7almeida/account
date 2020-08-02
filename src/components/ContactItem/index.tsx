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
} from './styles';

const ContactItem: React.FC<{contact: any}> = ({contact}) => {
  const [isModalVisible, setModalVisible] = useState(false);

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  return (
    <>
      <Container onPress={toggleModal}>
        <>
          <RoundedImage image={contact.image} />
          <InfoContainer>
            <View>
              <NameText>Débora Pomposa</NameText>
              <PhoneText>(11)998654-78521</PhoneText>
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
