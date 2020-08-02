import React, {useState} from 'react';

import GradientContainer from '../../components/GradientContainer';
import {Content, ContactList} from './styles';
import ContactItem from '../../components/ContactItem';
import {Separator} from '../../components/Separator';

interface Contact {
  image?: string;
}

const ContactListScreen: React.FC = () => {
  const [data] = useState<Contact[]>([
    {
      image:
        'https://i.pinimg.com/originals/aa/08/13/aa08139312f6d277bf8564fbc47571b6.jpg',
    },
    {
      image:
        'https://scontent.fbfh3-3.fna.fbcdn.net/v/t1.0-9/18622130_1509849419089082_7766073176748024324_n.jpg?_nc_cat=102&_nc_sid=09cbfe&_nc_ohc=L13lhC0ual4AX8QU3CD&_nc_oc=AQnTo5Jm-uhCQLIGsAF6Xnm3kiy_irIEEADLlClpUx1Z-bbUshYFnLEeBQmMLZUcKTk&_nc_ht=scontent.fbfh3-3.fna&oh=b4cd6a38e9ea5dfe8dbf473e044316b4&oe=5F4D9A60',
    },
    {
      image:
        'https://www.ibahia.com/fileadmin/user_upload/ibahia/2018/novembro/29/neymar.jpg',
    },
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
  ]);

  return (
    <GradientContainer>
      <Content>
        <ContactList
          showsVerticalScrollIndicator={false}
          keyExtractor={(_, index) => index.toString()}
          data={data}
          ItemSeparatorComponent={Separator}
          renderItem={({item}) => <ContactItem contact={item} />}
        />
      </Content>
    </GradientContainer>
  );
};

export default ContactListScreen;
