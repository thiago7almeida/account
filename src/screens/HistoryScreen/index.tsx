import React, {useState} from 'react';

import GradientContainer from '../../components/GradientContainer';
import ContactItem from '../../components/ContactItem';
import Chart from '../../components/Chart';

import {Content, ContactList, ContactContainer} from './styles';

interface Contact {
  image?: string;
  value: number;
}

const ContactListScreen: React.FC = () => {
  const [data] = useState<Contact[]>([
    {value: 30.5},
    {value: 30.5},
    {value: 30.5},
    {value: 30.5},
    {value: 30.5},
  ]);

  return (
    <GradientContainer>
      <Content>
        <ContactList
          ListHeaderComponent={Chart}
          showsVerticalScrollIndicator={false}
          keyExtractor={(_, index) => index.toString()}
          data={data}
          renderItem={({item}) => (
            <ContactContainer>
              <ContactItem withSeparator contact={item} withValue disable />
            </ContactContainer>
          )}
        />
      </Content>
    </GradientContainer>
  );
};

export default ContactListScreen;
