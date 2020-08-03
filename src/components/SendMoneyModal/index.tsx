import React, {useCallback, useState, useEffect} from 'react';
import {useDispatch} from 'react-redux';
import {TextInputMask} from 'react-native-masked-text';
import {useSelector} from 'react-redux';

import {AppState} from '../../store';
import {
  ModalContainer,
  Close,
  NameTextModal,
  PhoneTextModal,
  DescribeTextModal,
  InputContainer,
  TextInput,
  Button,
} from './styles';
import Modal from 'react-native-modal';
import RoundedImage from '../RoundedImage';
import {IContact} from '../../models/contact';
import {removeContact, sendMoneyTo} from '../../store/ducks/contacts';

type Props = {
  visible?: boolean;
  contact: IContact;
};

const SendMoneyModal: React.FC<Props> = ({visible = false, contact}) => {
  const user = useSelector((state: AppState) => state.user);
  const contacts = useSelector((state: AppState) => state.contacts);

  const [money, setMoney] = useState('R$0,00');

  const dispatch = useDispatch();
  const sendMoneyToContact = useCallback(
    () => dispatch(sendMoneyTo(contact.id, user.token, money)),
    [dispatch],
  );

  const onChangeMoney = (value: string) => {
    setMoney(value);
  };

  useEffect(() => {
    setMoney('R$0,00');
  }, [contact]);

  const storeContact = useCallback(() => dispatch(removeContact()), [dispatch]);

  return (
    <Modal isVisible={visible}>
      <ModalContainer>
        <Close onPress={storeContact} />
        <RoundedImage scale={0.9} image={contact?.photo} name={contact?.name} />
        <NameTextModal>{contact?.name}</NameTextModal>
        <PhoneTextModal>{contact?.phone}</PhoneTextModal>
        <DescribeTextModal>Valor a enviar:</DescribeTextModal>
        <InputContainer>
          <TextInputMask
            options={{
              unit: 'R$',
            }}
            customTextInput={TextInput}
            value={money}
            onChangeText={onChangeMoney}
            type="money"
            maxLength={10}
          />
        </InputContainer>
        {money !== 'R$0,00' && (
          <Button loading={contacts.loading} onPress={sendMoneyToContact}>
            Enviar
          </Button>
        )}
      </ModalContainer>
    </Modal>
  );
};

export default SendMoneyModal;
