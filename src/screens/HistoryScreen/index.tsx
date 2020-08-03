import React, {useState} from 'react';

import GradientContainer from '../../components/GradientContainer';
import ContactItem from '../../components/ContactItem';
import Chart from '../../components/Chart';

import {Content, ContactList, ContactContainer} from './styles';
import {useSelector} from 'react-redux';
import {AppState} from '../../store';

const ContactListScreen: React.FC = () => {
  const transfers = useSelector((state: AppState) => state.transfers);

  return (
    <GradientContainer>
      <Content>
        <ContactList
          ListHeaderComponent={Chart}
          showsVerticalScrollIndicator={false}
          keyExtractor={(_, index) => index.toString()}
          data={transfers.transfers}
          renderItem={({item}) => (
            <ContactContainer>
              <ContactItem withSeparator transfer={item} withValue disable />
            </ContactContainer>
          )}
        />
      </Content>
    </GradientContainer>
  );
};

export default ContactListScreen;
