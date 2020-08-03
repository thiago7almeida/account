import {RenderAPI, waitFor, fireEvent} from '@testing-library/react-native';
import waitForExpect from 'wait-for-expect';

import {renderApp} from '../tests/config/renderApp';

describe('ContactList', () => {
  describe('render user informations', () => {
    let app: RenderAPI;

    beforeEach(async () => {
      app = renderApp();
      const goToContacts = await waitFor(() => app.getByTestId('goToContacts'));
      await fireEvent.press(goToContacts);
    });
    it('should render correctly ', async () => {
      const contactListContainer = await app.findByTestId(
        'contactListContainer',
      );
      await waitForExpect(() => {
        expect(contactListContainer).toBeTruthy();
      });
    });
    it('should render correctly flatlist item when press ', async () => {
      const contactButton = await app.getAllByTestId('contactButton');
      await fireEvent.press(contactButton[0]);
      const modalText = await app.findByText('Valor a enviar:');
      await waitForExpect(() => {
        expect(modalText).toBeTruthy();
      });
    });
    it('should render correctly modal ', async () => {
      const contactButton = await app.getAllByTestId('contactButton');
      await fireEvent.press(contactButton[0]);
      const modalText = await app.findByText('Valor a enviar:');
      expect(modalText).toBeTruthy();

      const valueText = await app.findByTestId('valueText');
      expect(valueText).toBeTruthy();

      const buttonSend = await app.queryByTestId('buttonSend');
      expect(buttonSend).toBe(null);

      await fireEvent.changeText(valueText, 'R$22,22');
      const buttonSendAfterChangeText = await app.findByTestId('buttonSend');
      expect(buttonSendAfterChangeText).toBeTruthy;

      await fireEvent.press(buttonSendAfterChangeText);
      const emailText = await waitFor(() => app.getByTestId('emailText'));
      expect(emailText).toBeTruthy;
    });
  });
});
