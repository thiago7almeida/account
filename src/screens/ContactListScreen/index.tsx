import React from 'react';
import {useSelector} from 'react-redux';

import GradientContainer from '../../components/GradientContainer';
import ContactItem from '../../components/ContactItem';

import {Content, ContactList} from './styles';
import {AppState} from '../../store';

const ContactListScreen: React.FC = () => {
  const contacts = useSelector((state: AppState) => state.contacts);

  return (
    <GradientContainer>
      <Content>
        <ContactList
          showsVerticalScrollIndicator={false}
          keyExtractor={(_, index) => index.toString()}
          data={contacts.contacts}
          renderItem={({item}) => <ContactItem withSeparator contact={item} />}
        />
      </Content>
    </GradientContainer>
  );
};

export default ContactListScreen;
