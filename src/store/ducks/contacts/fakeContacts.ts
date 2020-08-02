import faker from 'faker';
import {IContact} from '../../../models/contact';

export const generateContacts = (): IContact[] => {
  const contacts: IContact[] = [];
  for (let i = 1; i < 21; i++) {
    contacts.push({
      email: faker.internet.email(),
      id: i,
      name: faker.name.findName(),
      photo: i % 3 === 0 ? null : faker.internet.avatar(),
      phone: faker.phone.phoneNumber('(##) #####-####'),
    });
  }
  return contacts;
};
