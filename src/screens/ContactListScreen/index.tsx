import React from 'react';
import {useSelector} from 'react-redux';

import GradientContainer from '../../components/GradientContainer';
import ContactItem from '../../components/ContactItem';

import {Content, ContactList} from './styles';
import {AppState} from '../../store';
import SendMoneyModal from '../../components/SendMoneyModal';

const ContactListScreen: React.FC = () => {
  const contacts = useSelector((state: AppState) => state.contacts);

  return (
    <GradientContainer testID="contactListContainer">
      <Content>
        <ContactList
          testID="contactList"
          showsVerticalScrollIndicator={false}
          keyExtractor={(_, index) => index.toString()}
          data={contacts.contacts}
          renderItem={({item}) => <ContactItem withSeparator contact={item} />}
        />
      </Content>
      {!!contacts.contact && (
        <SendMoneyModal
          visible={contacts.modaVisible}
          contact={contacts.contact}
        />
      )}
    </GradientContainer>
  );
};

export default ContactListScreen;
